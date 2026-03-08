export interface Topic {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTopicRequest {
  title: string;
}

export interface DeleteTopicResponse {
  topicId: string;
  deletedDocuments: number;
  message: string;
}
