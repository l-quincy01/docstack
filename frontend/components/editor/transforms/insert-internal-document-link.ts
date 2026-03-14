/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { PlateEditor } from "platejs/react";

type InsertInternalDocumentLinkParams = {
  documentId: string;
  topicId: string;
  title: string;
};

export function insertInternalDocumentLink(
  editor: PlateEditor,
  { documentId, topicId, title }: InsertInternalDocumentLinkParams
) {
  const linkNode = {
    type: "a",
    url: `/topics/${topicId}/${documentId}`,
    docId: documentId,
    topicId,
    linkKind: "internal-document",
    children: [{ text: title }],
  };

  editor.tf.insertNodes(linkNode as any);
}
