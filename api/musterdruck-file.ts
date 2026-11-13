import { get } from "@vercel/blob";

type NodeRequest = {
  method?: string;
  url?: string;
};

type NodeResponse = {
  status: (code: number) => NodeResponse;
  setHeader: (name: string, value: string) => NodeResponse;
  end: (body?: string | Uint8Array) => void;
};

export default async function handler(req: NodeRequest, res: NodeResponse) {
  if (req.method !== "GET") return res.status(405).setHeader("Content-Type", "application/json").end(JSON.stringify({ error: "Method not allowed" }));
  const pathname = new URL(req.url || "/", "https://www.geenie-media.ch").searchParams.get("pathname");
  if (!pathname || !pathname.startsWith("musterdruck/")) return res.status(400).setHeader("Content-Type", "application/json").end(JSON.stringify({ error: "Invalid pathname" }));

  try {
    const result = await get(pathname, { access: "private" });
    if (!result || result.statusCode !== 200) return res.status(404).end("Not found");
    res.status(200)
      .setHeader("Content-Type", result.blob.contentType || "application/pdf")
      .setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(result.blob.pathname.split("/").pop() || "druckdaten.pdf")}"`)
      .setHeader("Cache-Control", "private, no-store")
      .setHeader("X-Content-Type-Options", "nosniff");
    const buffer = Buffer.from(await result.stream.arrayBuffer());
    return res.end(buffer);
  } catch {
    return res.status(404).end("Not found");
  }
}
