/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { normalizeNodeId, Value } from "platejs";
import { Plate, usePlateEditor } from "platejs/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { EditorKit } from "@/components/editor/editor-kit";
import { SettingsDialog } from "@/components/editor/settings-dialog";
import { Editor, EditorContainer } from "@/components/ui/editor";

import { useAutosaveDocument } from "@/hooks/document/editor/useAutosaveDocument";

import { toast } from "sonner";
// import { useDocumentThumbnail } from "@/hooks/document/useDocumentThumbnail";
import { EditorDocumentLinkPickerHost } from "./EditorDocumentLinkPickerHost";

import { MarkdownPlugin, remarkMdx, remarkMention } from "@platejs/markdown";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { useDebounce } from "@/hooks/use-debounce";
import { MathKit } from "./plugins/math-kit";

type Props = {
  documentId: string;
  initialContent?: Value;
  initialMarkdown?: string;
};

const EMPTY_VALUE: Value = normalizeNodeId([
  { type: "p", children: [{ text: "" }] },
]);

export function PlateEditor({
  documentId,
  initialContent,
  initialMarkdown = ``,
}: Props) {
  const [markdownValue, setMarkdownValue] = useState(initialMarkdown);
  const debouncedMarkdownValue = useDebounce(markdownValue, 300);

  const thumbnailRef = useRef<HTMLDivElement>(null);

  const editor = usePlateEditor(
    {
      plugins: [...EditorKit, ...MathKit],
      value: EMPTY_VALUE,
      autoSelect: "end",
    },
    [documentId]
  );

  const markdownPlateEditor = usePlateEditor(
    {
      plugins: [
        ...EditorKit,
        ...MathKit,
        MarkdownPlugin.configure({
          options: {
            remarkPlugins: [
              remarkMath,
              remarkGfm,
              remarkMdx,
              remarkMention,
              remarkEmoji as any,
            ],
          },
        }),
      ],
      value: (editor) =>
        editor.getApi(MarkdownPlugin).markdown.deserialize(initialMarkdown),
    },
    []
  );

  useEffect(() => {
    if (debouncedMarkdownValue !== initialMarkdown) {
      markdownPlateEditor.tf.reset();
      markdownPlateEditor.tf.setValue(
        markdownPlateEditor.api.markdown.deserialize(debouncedMarkdownValue, {
          remarkPlugins: [
            remarkMath,
            remarkGfm,
            remarkMdx,
            remarkMention,
            remarkEmoji as any,
          ],
        })
      );
    }
  }, [debouncedMarkdownValue, initialMarkdown, markdownPlateEditor]);

  const contentToLoad = useMemo<Value>(() => {
    return initialContent ? normalizeNodeId(initialContent) : EMPTY_VALUE;
  }, [initialContent]);

  const autosave = useAutosaveDocument(documentId, 2000);

  useEffect(() => {
    editor.tf.setValue(contentToLoad);
    autosave.setBaseline(contentToLoad);
  }, [editor, contentToLoad]);

  useEffect(() => {
    if (autosave.status === "saved") {
      toast.success("Saved");
    }

    if (autosave.status === "error") {
      toast.error("Error saving");
    }
  }, [autosave.status]);

  return (
    <div className="flex flex-col h-full">
      <Plate
        editor={editor}
        onValueChange={({ value }) => {
          autosave.queueSave(value);
          // thumbnail.queueThumbnail(value);
        }}
      >
        <EditorContainer className="scrollbar-hide max-h-[90vh]">
          <div ref={thumbnailRef}>
            <Editor variant="demo" className="scrollbar-hide" />
          </div>
        </EditorContainer>

        <SettingsDialog />
        <EditorDocumentLinkPickerHost />
      </Plate>
    </div>
  );
}
