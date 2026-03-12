import { getTopicGraph } from "@/services/graph/graph.service";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

export function useTopicGraphQuery(topicId: string) {
  const { getToken } = useAuth();

  return useQuery({
    queryKey: ["topic-graph", topicId],
    queryFn: async () => {
      const token = await getToken();
      return getTopicGraph(topicId, token!);
    },
    enabled: !!topicId,
  });
}
