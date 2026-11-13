import { head } from "@vercel/blob";
import { Resend } from "resend";

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const RECIPIENT = process.env.MUSTERDRUCK_RECIPIENT || "info@geenie-media.ch";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function value(form: FormData, key: string) {
  const entry = form.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

export default async function handler(request: Request) {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const form = await request.formData();
    if (value(form, "website")) return json({ error: "Spam rejected" }, 400);

    const required = ["binding", "format", "orientation", "pages", "paper", "dataOption", "editions", "name", "street", "city", "email", "phone"];
    const missing = required.filter((key) => !value(form, key));
    if (missing.length > 0) return json({ error: `Missing fields: ${missing.join(", ")}` }, 422);

    const dataOption = value(form, "dataOption");
    const pdfPath = value(form, "pdfPath");
    let downloadUrl = "Kein PDF hochgeladen – neutrales Format- & Papiermuster gewünscht.";

    if (dataOption === "pdf") {
      if (!pdfPath || !pdfPath.startsWith("musterdruck/")) return json({ error: "PDF is required" }, 422);
      if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL_OIDC_TOKEN) return json({ error: "Blob storage is not configured" }, 503);
      const blob = await head(pdfPath, { access: "private" });
      if (blob.size > MAX_FILE_SIZE || blob.contentType !== "application/pdf") return json({ error: "Invalid PDF" }, 415);
      downloadUrl = new URL(`/api/musterdruck-file?pathname=${encodeURIComponent(pdfPath)}`, request.url).toString();
    }

    if (!process.env.RESEND_API_KEY) return json({ error: "Mail delivery is not configured" }, 503);
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

    if (result.error) return json({ error: "Mail delivery failed" }, 502);
    return json({ ok: true });
  } catch (error) {
    console.error("musterdruck submission failed", error);
    return json({ error: "Submission failed" }, 500);
  }
}
