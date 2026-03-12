"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTopic,
  deleteTopic,
  getTopics,
  renameTopic,
} from "@/services/topics/topics.service";
import type { Topic } from "@/lib/types/topic/topic.types";

export const topicKeys = {
  all: ["topics"] as const,
};

export function useTopicsQuery() {
  const { getToken, isLoaded, userId } = useAuth();

  return useQuery({
    queryKey: topicKeys.all,
    queryFn: async () => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return getTopics(token);
    },
    enabled: isLoaded && !!userId,
  });
}

export function useCreateTopicMutation() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return createTopic({ title }, token);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: topicKeys.all });
    },
  });
}

export function useDeleteTopicMutation() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (topicId: string) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return deleteTopic(topicId, token);
    },

    onSuccess: (res) => {
      queryClient.setQueryData<Topic[]>(topicKeys.all, (old) =>
        (old ?? []).filter((t) => t.id !== res.topicId)
      );
    },
  });
}

export function useRenameTopicMutation() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      topicId,
      title,
    }: {
      topicId: string;
      title: string;
    }) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return renameTopic(topicId, { title }, token);
    },
    onSuccess: (updatedTopic) => {
      queryClient.setQueryData<Topic[]>(topicKeys.all, (old) =>
        (old ?? []).map((t) => (t.id === updatedTopic.id ? updatedTopic : t))
      );
    },
  });
}
