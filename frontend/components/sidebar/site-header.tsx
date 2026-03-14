"use client";

import Link from "next/link";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useDocumentsByTopicQuery } from "@/hooks/document/useDocument";
import { useTopicsQuery } from "@/hooks/topics/useTopics";
import { useParams, usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Maximize2, Minimize2 } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const params = useParams<{ topicId?: string; documentId?: string }>();
  const [maximise, setMaximise] = useState(false);
  const { toggleSidebar, setOpen } = useSidebar();

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
    <header className="mb-0 bg-background sticky w-full flex h-(--header-height) shrink-0 items-center gap-2">
      <div className="flex flex-row justify-start items-center gap-2  px-4">
        {!maximise && <SidebarTrigger className="p-0 m-0" />}
        <h1 className="text-base font-medium flex items-center gap-2">
          {/* Dashboard */}
          {isDashboard && "Dashboard"}

          {/* Topic page */}
          {isTopicPage && (
            <>
              {!maximise && topic && (
                <Link
                  href={`/topics/${topicId}`}
                  className="hover:underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  {topic.title}
                </Link>
              )}

              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => {
                  setOpen(false);
                  setMaximise((v) => !v);
                }}
              >
                {maximise ? (
                  <Minimize2 className=" rotate-90" size={16} />
                ) : (
                  <Maximize2 className=" rotate-90" size={16} />
                )}
              </Button>
            </>
          )}

          {/* Document page */}
          {isDocumentPage && (
            <>
              {!maximise && topic && (
                <Link
                  href={`/topics/${topicId}`}
                  className="hover:underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  {topic.title}
                </Link>
              )}
              {!maximise && <span>/</span>}
              <span>{document?.title ?? "Loading..."}</span>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => {
                  setOpen(false);
                  setMaximise((v) => !v);
                }}
              >
                {maximise ? (
                  <Minimize2 className=" rotate-90" size={16} />
                ) : (
                  <Maximize2 className=" rotate-90" size={16} />
                )}
              </Button>
            </>
          )}
        </h1>
      </div>
    </header>
  );
}
