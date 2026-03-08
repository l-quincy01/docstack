/* eslint-disable @typescript-eslint/no-explicit-any */
export type DocItemStatus = "ACTIVE" | "TRASHED";

export interface DocumentItem {
  id: string;
  topicId: string;
  title: string;
  content?: any;
  thumbnailUrl?: string | null;
  status?: DocItemStatus;
  createdAt?: string;
  updatedAt?: string;
}

/*
 private String id;
    private String topicId;
    private String topicTitle;
    private String title;
    private String content;
    private DocItemStatus status;
    private Instant createdAt;
    private Instant updatedAt;
*/

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
  content?: any;
  createdAt: string;
  updatedAt: string;
  thumbnailUrl: string;
}
