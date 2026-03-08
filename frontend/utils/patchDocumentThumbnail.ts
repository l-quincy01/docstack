export async function patchDocumentThumbnail(
  documentId: string,
  thumbnailUrl: string,
  token: string | null
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/documents/${documentId}/thumbnail`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ thumbnailUrl }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update document thumbnail URL");
  }

  return res.json();
}
