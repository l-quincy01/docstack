"use client";

import { normalizeNodeId, Value } from "platejs";
import { Plate, usePlateEditor } from "platejs/react";
import { useEffect, useMemo, useRef } from "react";

import { EditorKit } from "@/components/editor/editor-kit";
import { SettingsDialog } from "@/components/editor/settings-dialog";
import { Editor, EditorContainer } from "@/components/ui/editor";

import { useAutosaveDocument } from "@/hooks/document/editor/useAutosaveDocument";

import { toast } from "sonner";
// import { useDocumentThumbnail } from "@/hooks/document/useDocumentThumbnail";
import { EditorDocumentLinkPickerHost } from "./EditorDocumentLinkPickerHost";

type Props = {
  documentId: string;
  initialContent?: Value;
};

const EMPTY_VALUE: Value = normalizeNodeId([
  { type: "p", children: [{ text: "" }] },
]);

export function PlateEditor({ documentId, initialContent }: Props) {
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const editor = usePlateEditor(
    {
      plugins: EditorKit,

      value: EMPTY_VALUE,
      autoSelect: "end",
    },
    [documentId]
  );

  const contentToLoad = useMemo<Value>(() => {
    return initialContent ? normalizeNodeId(initialContent) : EMPTY_VALUE;
  }, [initialContent]);

  const autosave = useAutosaveDocument(documentId, 2000);
  // const thumbnail = useDocumentThumbnail({
  //   documentId,
  //   targetRef: thumbnailRef,
  //   delayMs: 5000,
  // });

  useEffect(() => {
    editor.tf.setValue(contentToLoad);
    autosave.setBaseline(contentToLoad);
    // thumbnail.setBaseline(contentToLoad);
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
