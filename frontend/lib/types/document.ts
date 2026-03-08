export type DocItemStatus = "ACTIVE" | "TRASHED";

export interface DocumentItem {
  id: string;
  topicId: string;
  title: string;
  content?: string;
  status?: DocItemStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateDocumentRequest {
  topicId: string;
  title: string;
  content?: string;
}

export interface DocumentCardItem {
  id: string;
  topicId: string;
  topicTitle: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
