"use client";

import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useDocumentsByTopicQuery } from "@/hooks/document/useDocument";
import { useTopicsQuery } from "@/hooks/topics/useTopics";
import { useParams, usePathname } from "next/navigation";
import React, { useMemo } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const params = useParams<{ topicId?: string; documentId?: string }>();

  const topicId = params?.topicId;
  const documentId = params?.documentId;

  const { data: topics = [] } = useTopicsQuery();
  const { data: documents = [] } = useDocumentsByTopicQuery(topicId!, {
    enabled: !!topicId,
  });

  const topic = topics.find((t) => t.id === topicId);
  const document = documents.find((d) => d.id === documentId);

  const isDashboard = pathname === "/dashboard";
  const isTopicPage = topicId && !documentId;
  const isDocumentPage = topicId && documentId;

  return (
    <header className="mb-2 bg-background sticky w-full flex h-(--header-height) shrink-0 items-center gap-2">
      <div className="flex flex-row w-full justify-start items-center gap-2 px-4">
        <SidebarTrigger />

        <h1 className="text-base font-medium flex items-center gap-2">
          {/* Dashboard */}
          {isDashboard && "Dashboard"}

          {/* Topic page */}
          {isTopicPage && topic?.title}

          {/* Document page */}
          {isDocumentPage && (
            <>
              {topic && (
                <Link
                  href={`/topics/${topicId}`}
                  className="hover:underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  {topic.title}
                </Link>
              )}
              <span>/</span>
              <span>{document?.title ?? "Loading..."}</span>
            </>
          )}
        </h1>
      </div>
    </header>
  );
}
