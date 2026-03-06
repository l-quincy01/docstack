"use client";

import { normalizeNodeId } from "platejs";
import { Plate, usePlateEditor, type Value } from "platejs/react";
import { useEffect, useMemo } from "react";

import { EditorKit } from "@/components/editor/editor-kit";
import { SettingsDialog } from "@/components/editor/settings-dialog";
import { Editor, EditorContainer } from "@/components/ui/editor";

import { useAutosaveDocument } from "@/hooks/document/editor/useAutosaveDocument";
import { toast } from "sonner";

type Props = {
  documentId: string;
  initialContent?: Value;
};

const EMPTY_VALUE: Value = normalizeNodeId([
  { type: "p", children: [{ text: "" }] },
]);

export function PlateEditor({ documentId, initialContent }: Props) {
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

  useEffect(() => {
    editor.tf.setValue(contentToLoad);
    autosave.setBaseline(contentToLoad);
  }, [editor, contentToLoad]);

  useEffect(() => {
    if (autosave.status === "saved") {
      toast("Saved");
    }
    if (autosave.status === "error") {
      toast("Error Saving");
    }
  }, [autosave.status]);

  return (
    <div className="flex flex-col h-full">
      <Plate
        editor={editor}
        onValueChange={({ value }) => {
          autosave.queueSave(value);
        }}
      >
        <EditorContainer className="scrollbar-hide max-h-[90vh]">
          <Editor variant="demo" className="scrollbar-hide" />
        </EditorContainer>
        <SettingsDialog />
      </Plate>
    </div>
  );
}
