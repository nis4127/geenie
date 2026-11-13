import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { randomUUID } from "node:crypto";

export default async function handler(request: Request) {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });
  try {
    const body = (await request.json()) as HandleUploadBody;
    const response = await handleUpload({
      body,
      request,
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
    return Response.json(response);
  } catch (error) {
    console.error("musterdruck upload token failed", error);
    return Response.json({ error: "Upload konnte nicht vorbereitet werden." }, { status: 400 });
  }
}
