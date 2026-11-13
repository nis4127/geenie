import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { randomUUID } from "node:crypto";

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

function toWebRequest(req: NodeRequest, body: string) {
  const protocol = String(req.headers["x-forwarded-proto"] || "https").split(",")[0];
  const host = String(req.headers.host || "localhost");
  const headers = new Headers();
  for (const [key, raw] of Object.entries(req.headers)) {
    if (raw !== undefined) headers.set(key, Array.isArray(raw) ? raw.join(", ") : raw);
  }
  return new Request(`${protocol}://${host}${req.url || "/"}`, { method: "POST", headers, body });
}

async function readBody(req: NodeRequest & AsyncIterable<Uint8Array>) {
  const chunks: Uint8Array[] = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(req: NodeRequest & AsyncIterable<Uint8Array>, res: NodeResponse) {
  if (req.method !== "POST") return res.status(405).setHeader("Content-Type", "text/plain").end("Method not allowed");
  try {
    const rawBody = await readBody(req);
    const body = JSON.parse(rawBody) as HandleUploadBody;
    const response = await handleUpload({
      body,
      request: toWebRequest(req, rawBody),
      onBeforeGenerateToken: async (pathname) => ({
        allowedContentTypes: ["application/pdf"],
        maximumSizeInBytes: 50 * 1024 * 1024,
        addRandomSuffix: false,
        pathname: `musterdruck/${randomUUID().replaceAll("-", "")}-${pathname.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-100)}`,
      }),
      onUploadCompleted: async ({ blob }) => {
        console.log("musterdruck PDF uploaded", blob.pathname);
      },
    });
    res.status(response.status).setHeader("Content-Type", "application/json; charset=utf-8").end(await response.text());
  } catch (error) {
    console.error("musterdruck upload token failed", error);
    res.status(400).setHeader("Content-Type", "application/json; charset=utf-8").end(JSON.stringify({ error: "Upload konnte nicht vorbereitet werden." }));
  }
}
