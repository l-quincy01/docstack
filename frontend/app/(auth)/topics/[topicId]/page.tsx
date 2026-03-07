"use client";

import AddDocument from "@/components/documents/dialogs/add-document";
import DocumentCard from "@/components/documents/document-card";
import { useDocumentsByTopicQuery } from "@/hooks/document/useDocument";
import { useTopicsQuery } from "@/hooks/topics/useTopics";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const params = useParams<{ topicId: string }>();

  const topicId = params.topicId;

  const {
    data: topics = [],
    isLoading: isTopicLoading,
    isError: isTopicError,
    error: topicError,
  } = useTopicsQuery();

  const {
    data: documents = [],
    isLoading,
    isError,
    error,
  } = useDocumentsByTopicQuery(topicId);

  const topicTitle = topics.find((topic) => topic.id === topicId);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row w-full justify-center">
        {/* <div className="text-2xl font-bold">{topicTitle?.title}</div> */}
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

      <div>
        {documents.length < 1 ? (
          <div className="flex flex-col justify-center items-center w-full h-full">
            No documents yet.
          </div>
        ) : (
          <div className="flex flex-row flex-wrap gap-4">
            {documents.map((doc) => (
              <DocumentCard key={doc.id} cardData={doc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
