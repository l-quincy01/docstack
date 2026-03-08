type PresignedUploadResponse = {
  uploadUrl: string;
  publicUrl: string;
};

export async function uploadThumbnailToR2(
  blob: Blob,
  documentId: string,
  token: string | null
): Promise<{ url: string }> {
  const presignRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/documents/${documentId}/thumbnail/presign`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!presignRes.ok) {
    throw new Error("Failed to get presigned upload URL");
  }

  const presignData = (await presignRes.json()) as PresignedUploadResponse;

  const uploadRes = await fetch(presignData.uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "image/png",
    },
    body: blob,
  });

  if (!uploadRes.ok) {
    throw new Error("Failed to upload thumbnail to R2");
  }

  return { url: presignData.publicUrl };
}
