"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { DocumentCardItem, DocumentItem } from "@/lib/types/document";
import {
  createDocument,
  getActiveDocumentsByUser,
  getDocumentById,
  getDocumentsByTopic,
  renameDocument,
  trashDocument,
  updateDocumentContent,
} from "@/services/documents/documents.service";

export const documentKeys = {
  byTopic: (topicId: string) => ["documents", "topic", topicId] as const,
};

export const userDocumentKeys = {
  activeByUser: ["documents", "user", "ACTIVE"] as const,
};

export function useActiveDocumentsByUserQuery() {
  const { getToken, isLoaded, userId } = useAuth();

  return useQuery<DocumentCardItem[]>({
    queryKey: userDocumentKeys.activeByUser,
    queryFn: async () => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return getActiveDocumentsByUser(token);
    },
    enabled: isLoaded && !!userId,
  });
}

export function useDocumentsByTopicQuery(topicId: string) {
  const { getToken, isLoaded, userId } = useAuth();

  return useQuery({
    queryKey: documentKeys.byTopic(topicId),
    queryFn: async () => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return getDocumentsByTopic(topicId, token);
    },
    enabled: isLoaded && !!userId && !!topicId,
  });
}

export function useCreateDocumentMutation(topicId?: string) {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      if (!topicId) throw new Error("Missing topicId");
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return createDocument({ topicId, title, content: "" }, token);
    },
    onSuccess: (newDoc) => {
      if (!topicId) return;
      queryClient.setQueryData<DocumentCardItem[]>(
        ["documents", "topic", topicId],
        (old) => (old ? [newDoc, ...old] : [newDoc])
      );
    },
  });
}

export function useRenameDocumentMutation(topicId: string) {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      documentId,
      title,
    }: {
      documentId: string;
      title: string;
    }) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return renameDocument(documentId, { title }, token);
    },
    onSuccess: (updatedDoc) => {
      queryClient.setQueryData<DocumentCardItem[]>(
        documentKeys.byTopic(topicId),
        (old) =>
          (old ?? []).map((d) => (d.id === updatedDoc.id ? updatedDoc : d))
      );
    },
  });
}

export function useTrashDocumentMutation(topicId: string) {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (documentId: string) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return trashDocument(documentId, token);
    },
    onSuccess: (_res, documentId) => {
      queryClient.setQueryData<DocumentCardItem[]>(
        documentKeys.byTopic(topicId),
        (old) => (old ?? []).filter((d) => d.id !== documentId)
      );
    },
  });
}

export function useUpdateDocumentContentMutation(documentId: string) {
  const { getToken } = useAuth();

  return useMutation({
    mutationFn: async (content: unknown) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");

      return updateDocumentContent(documentId, content, token);
    },
  });
}

export function useDocumentQuery(documentId: string) {
  const { getToken, isLoaded, userId } = useAuth();

  return useQuery({
    queryKey: ["documents", documentId],
    queryFn: async () => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");

      return getDocumentById(documentId, token);
    },
    enabled: isLoaded && !!userId && !!documentId,
  });
}
