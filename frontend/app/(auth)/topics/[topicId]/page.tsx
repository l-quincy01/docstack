"use client";

import AddDocument from "@/components/documents/dialogs/add-document";
import DocumentCard from "@/components/documents/document-card";
import { useDocumentsByTopicQuery } from "@/hooks/document/useDocument";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams<{ topicId: string }>();

  const topicId = params.topicId;

  const {
    data: documents = [],
    isLoading,
    isError,
    error,
  } = useDocumentsByTopicQuery(topicId);

  console.log("topicId:", topicId);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row w-full justify-center">
        <div className="text-2xl font-bold">Topics</div>
      </div>

      <div className="text-muted-foreground font-bold">
        Start a new document
      </div>

      <AddDocument />

      {isLoading && (
        <div className="text-sm text-muted-foreground">
          Loading documents...
        </div>
      )}

      {isError && (
        <div className="text-sm text-destructive">
          {(error as Error)?.message ?? "Failed to load documents"}
        </div>
      )}

      <div className="flex flex-row flex-wrap gap-4">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} cardData={doc} topicId={params.topicId} />
        ))}
      </div>
    </div>
  );
}
