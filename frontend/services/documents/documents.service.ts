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
