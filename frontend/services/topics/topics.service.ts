import { apiFetch } from "@/lib/api";
import type {
  Topic,
  CreateTopicRequest,
  DeleteTopicResponse,
} from "@/lib/types/topic";

export async function getTopics(token: string): Promise<Topic[]> {
  return apiFetch<Topic[]>("/api/topics", { method: "GET" }, token);
}

export async function createTopic(
  payload: CreateTopicRequest,
  token: string
): Promise<Topic> {
  return apiFetch<Topic>(
    "/api/topics",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    token
  );
}

export async function deleteTopic(
  topicId: string,
  token: string
): Promise<DeleteTopicResponse> {
  return apiFetch<DeleteTopicResponse>(
    `/api/topics/${topicId}`,
    { method: "DELETE" },
    token
  );
}

export async function renameTopic(
  topicId: string,
  payload: { title: string },
  token: string
): Promise<Topic> {
  return apiFetch<Topic>(
    `/api/topics/${topicId}`,
    {
      method: "PATCH",
      body: JSON.stringify(payload),
    },
    token
  );
}
