"use client";

import AddDocument from "@/components/documents/dialogs/add-document";
import DocumentCard from "@/components/documents/document-card";
import { Button } from "@/components/ui/button";
import { useDocumentsByTopicQuery } from "@/hooks/document/useDocument";
import { useTopicsQuery } from "@/hooks/topics/useTopics";
import { Waypoints } from "lucide-react";
import Link from "next/link";
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
      <div className="flex flex-row w-full justify-center"></div>

      <div className="text-muted-foreground font-bold">
        Start a new document
      </div>

      <div className="flex flex-row justify-between items-end">
        <AddDocument />
        <Link href={`/topics/some-Topic-ID/graph`}>
          <Button variant="ghost">
            <Waypoints />
          </Button>
        </Link>
      </div>

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
