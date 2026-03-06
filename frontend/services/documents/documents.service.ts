import { apiFetch } from "@/lib/api";
import type {
  CreateDocumentRequest,
  DocumentCardItem,
  DocumentItem,
} from "@/lib/types/document";

export async function createDocument(
  payload: CreateDocumentRequest,
  token: string
): Promise<DocumentItem> {
  return apiFetch<DocumentItem>(
    `/api/documents`,
    { method: "POST", body: JSON.stringify(payload) },
    token
  );
}

export async function getActiveDocumentsByUser(
  token: string
): Promise<DocumentCardItem[]> {
  return apiFetch<DocumentCardItem[]>(
    `/api/documents?status=ACTIVE`,
    { method: "GET" },
    token
  );
}

export async function getDocumentsByTopic(
  topicId: string,
  token: string
): Promise<DocumentCardItem[]> {
  return apiFetch<DocumentCardItem[]>(
    `/api/documents/topic/${topicId}`,
    { method: "GET" },
    token
  );
}

export async function renameDocument(
  documentId: string,
  payload: { title: string },
  token: string
): Promise<DocumentCardItem> {
  return apiFetch<DocumentCardItem>(
    `/api/documents/${documentId}`,
    { method: "PATCH", body: JSON.stringify(payload) },
    token
  );
}

export async function trashDocument(documentId: string, token: string) {
  return apiFetch(
    `/api/documents/${documentId}/trash`,
    { method: "PATCH" },
    token
  );
}

export async function getTrashDocuments(
  token: string
): Promise<DocumentCardItem[]> {
  return apiFetch<DocumentCardItem[]>(
    "/api/documents/trash",
    { method: "GET" },
    token
  );
}

export async function recoverDocument(documentId: string, token: string) {
  return apiFetch(
    `/api/documents/${documentId}/recover`,
    { method: "PATCH" },
    token
  );
}

export async function permanentDeleteDocument(
  documentId: string,
  token: string
) {
  return apiFetch(`/api/documents/${documentId}`, { method: "DELETE" }, token);
}

export async function updateDocumentContent(
  documentId: string,
  content: unknown,
  token: string
) {
  return apiFetch(
    `/api/documents/${documentId}/content`,
    {
      method: "PATCH",
      body: JSON.stringify({ content }),
    },
    token
  );
}

export async function getDocumentById(
  documentId: string,
  token: string
): Promise<DocumentItem> {
  return apiFetch<DocumentItem>(
    `/api/documents/${documentId}`,
    { method: "GET" },
    token
  );
}
