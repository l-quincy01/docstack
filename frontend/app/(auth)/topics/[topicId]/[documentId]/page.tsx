"use client";

import { PlateEditor } from "@/components/editor/plate-editor";
import { useParams } from "next/navigation";
import { useDocumentQuery } from "@/hooks/document/useDocument";

import { useMemo } from "react";

export default function Page() {
  const params = useParams<{ documentId: string }>();
  const documentId = params.documentId;

  const { data: document, isLoading, isError } = useDocumentQuery(documentId);

  const defaultValue = useMemo(
    () => [
      {
        type: "p",
        children: [{ text: "" }],
      },
    ],
    []
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading document...
      </div>
    );
  }

  if (isError || !document) {
    return (
      <div className="flex justify-center items-center h-screen">
        Failed to load document
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center scrollbar-hide">
      <PlateEditor
        documentId={documentId}
        initialContent={document.content ?? defaultValue}
      />
    </div>
  );
}
