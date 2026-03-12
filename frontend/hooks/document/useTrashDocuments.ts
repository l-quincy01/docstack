"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { DocumentCardItem } from "@/lib/types/document/document.types";
import {
  getTrashDocuments,
  permanentDeleteDocument,
  recoverDocument,
} from "@/services/documents/documents.service";

export const trashKeys = {
  all: ["documents", "trash"] as const,
};

export function useTrashDocumentsQuery() {
  const { getToken, isLoaded, userId } = useAuth();

  return useQuery({
    queryKey: trashKeys.all,
    queryFn: async () => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return getTrashDocuments(token);
    },
    enabled: isLoaded && !!userId,
  });
}

export function useRecoverDocumentMutation() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (documentId: string) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return recoverDocument(documentId, token);
    },
    onSuccess: (_res, documentId) => {
      queryClient.setQueryData<DocumentCardItem[]>(trashKeys.all, (old) =>
        (old ?? []).filter((d) => d.id !== documentId)
      );

      queryClient.invalidateQueries({ queryKey: ["documents", "topic"] });
    },
  });
}

export function usePermanentDeleteDocumentMutation() {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (documentId: string) => {
      const token = await getToken();
      if (!token) throw new Error("Not authenticated");
      return permanentDeleteDocument(documentId, token);
    },
    onSuccess: (_res, documentId) => {
      queryClient.setQueryData<DocumentCardItem[]>(trashKeys.all, (old) =>
        (old ?? []).filter((d) => d.id !== documentId)
      );
    },
  });
}
