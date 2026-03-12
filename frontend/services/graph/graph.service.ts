import { apiFetch } from "@/lib/api";
import { TopicKnowledgeGraph } from "@/lib/types/graph/graph.types";

export async function getTopicGraph(
  topicId: string,
  token: string
): Promise<TopicKnowledgeGraph> {
  return apiFetch<TopicKnowledgeGraph>(
    `/api/topics/${topicId}/graph`,
    { method: "GET" },
    token
  );
}
