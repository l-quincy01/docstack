"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { useEditorRef } from "platejs/react";

import { DocumentLinkPickerModal } from "@/components/editor/document-link-picker-modal";
import { insertInternalDocumentLink } from "@/components/editor/transforms/insert-internal-document-link";
import { useDocumentLinkPickerStore } from "@/components/editor/stores/document-link-picker-store";

export function EditorDocumentLinkPickerHost() {
  const editor = useEditorRef();
  const params = useParams<{ topicId?: string; documentId?: string }>();

  const open = useDocumentLinkPickerStore((state) => state.open);
  const topicIdFromStore = useDocumentLinkPickerStore((state) => state.topicId);
  const closePicker = useDocumentLinkPickerStore((state) => state.closePicker);

  const topicId = topicIdFromStore || params?.topicId || "";
  const documentId = params.documentId || "";

  return (
    <DocumentLinkPickerModal
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) closePicker();
      }}
      topicId={topicId}
      currentlyOpenDocumentId={documentId}
      onSelectDocument={(doc) => {
        insertInternalDocumentLink(editor, {
          documentId: doc.id,
          topicId,
          title: doc.title,
        });
        closePicker();
      }}
    />
  );
}
