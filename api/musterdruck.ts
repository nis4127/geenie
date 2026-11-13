import { head } from "@vercel/blob";
import { Resend } from "resend";

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const RECIPIENT = process.env.MUSTERDRUCK_RECIPIENT || "info@geenie-media.ch";

type NodeRequest = {
  method?: string;
  url?: string;
  headers: Record<string, string | string[] | undefined>;
};

type NodeResponse = {
  status: (code: number) => NodeResponse;
  setHeader: (name: string, value: string) => NodeResponse;
  end: (body?: string) => void;
};

function json(res: NodeResponse, body: unknown, status = 200) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8").end(JSON.stringify(body));
}

function value(form: FormData, key: string) {
  const entry = form.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function toWebRequest(req: NodeRequest) {
  const protocol = String(req.headers["x-forwarded-proto"] || "https").split(",")[0];
  const host = String(req.headers.host || "localhost");
  const headers = new Headers();
  for (const [key, raw] of Object.entries(req.headers)) {
    if (raw !== undefined) headers.set(key, Array.isArray(raw) ? raw.join(", ") : raw);
  }
  return new Request(`${protocol}://${host}${req.url || "/"}`, {
    method: req.method || "POST",
    headers,
    body: req as unknown as BodyInit,
    // Required by Node's fetch implementation when streaming an incoming request.
    duplex: "half",
  } as RequestInit & { duplex: "half" });
}

export default async function handler(req: NodeRequest, res: NodeResponse) {
  if (req.method !== "POST") return json(res, { error: "Method not allowed" }, 405);

  try {
    const form = await toWebRequest(req).formData();
    if (value(form, "website")) return json(res, { error: "Spam rejected" }, 400);

    const required = ["binding", "format", "orientation", "pages", "paper", "dataOption", "editions", "name", "street", "city", "email", "phone"];
    const missing = required.filter((key) => !value(form, key));
    if (missing.length > 0) return json(res, { error: `Missing fields: ${missing.join(", ")}` }, 422);

    const dataOption = value(form, "dataOption");
    const pdfPath = value(form, "pdfPath");
    let downloadUrl = "Kein PDF hochgeladen – neutrales Format- & Papiermuster gewünscht.";

    if (dataOption === "pdf") {
      if (!pdfPath || !pdfPath.startsWith("musterdruck/")) return json(res, { error: "PDF is required" }, 422);
      if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL_OIDC_TOKEN) return json(res, { error: "Blob storage is not configured" }, 503);
      const blob = await head(pdfPath, { access: "private" });
      if (blob.size > MAX_FILE_SIZE || blob.contentType !== "application/pdf") return json(res, { error: "Invalid PDF" }, 415);
      downloadUrl = new URL(`/api/musterdruck-file?pathname=${encodeURIComponent(pdfPath)}`, `https://${req.headers.host || "www.geenie-media.ch"}`).toString();
    }

    if (!process.env.RESEND_API_KEY) return json(res, { error: "Mail delivery is not configured" }, 503);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const subject = `Neue Musteranfrage: ${value(form, "name")}${value(form, "company") ? ` – ${value(form, "company")}` : ""}`;
    const summary = [
      "Neue Anfrage für einen kostenlosen Broschüren-Musterdruck",
      "",
      `Bindung: ${value(form, "binding")}`,
      `Format: ${value(form, "format")}`,
      `Ausrichtung: ${value(form, "orientation")}`,
      `Seitenumfang: ${value(form, "pages")}`,
      `Papier: ${value(form, "paper")}`,
      `Druckdaten: ${dataOption === "pdf" ? "Eigene PDF-Datei" : "Neutrales Format- & Papiermuster"}`,
      `Gewünschte Auflagen: ${value(form, "editions")}${value(form, "customEdition") ? ` (individuell: ${value(form, "customEdition")})` : ""}`,
      "",
      `Firma / Verein: ${value(form, "company") || "–"}`,
      `Name: ${value(form, "name")}`,
      `Adresse: ${value(form, "street")}, ${value(form, "city")}`,
      `E-Mail: ${value(form, "email")}`,
      `Telefon: ${value(form, "phone")}`,
      `Spezialwünsche & Bemerkungen: ${value(form, "notes") || "–"}`,
      "",
      `PDF-Download: ${downloadUrl}`,
    ].join("\n");

    const result = await resend.emails.send({
      from: process.env.MUSTERDRUCK_FROM_EMAIL || "Geenie Media <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: value(form, "email"),
      subject,
      text: summary,
    });

    if (result.error) return json(res, { error: "Mail delivery failed" }, 502);
    return json(res, { ok: true });
  } catch (error) {
    console.error("musterdruck submission failed", error);
    return json(res, { error: "Submission failed" }, 500);
  }
}
