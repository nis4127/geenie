import { get } from "@vercel/blob";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export default async function handler(request: Request) {
  if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);
  const pathname = new URL(request.url).searchParams.get("pathname");
  if (!pathname || !pathname.startsWith("musterdruck/")) return json({ error: "Invalid pathname" }, 400);

  try {
    const result = await get(pathname, { access: "private" });
    if (!result || result.statusCode !== 200) return new Response("Not found", { status: 404 });
    return new Response(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType || "application/pdf",
        "Content-Disposition": `attachment; filename="${encodeURIComponent(result.blob.pathname.split("/").pop() || "druckdaten.pdf")}"`,
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
