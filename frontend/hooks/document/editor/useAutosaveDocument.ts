"use client";

import { useEffect, useRef, useState } from "react";
import type { Value } from "platejs";
import { useUpdateDocumentContentMutation } from "@/hooks/document/useDocument";

type SaveStatus = "idle" | "saving" | "saved" | "error";

export function useAutosaveDocument(documentId: string, delayMs = 2000) {
  const mutation = useUpdateDocumentContentMutation(documentId);

  const [status, setStatus] = useState<SaveStatus>("idle");

  const lastSaved = useRef<string | null>(null);
  const timerId = useRef<number | null>(null);
  const latestValue = useRef<Value | null>(null);
  const saveSeq = useRef(0);

  const setBaseline = (value: Value) => {
    lastSaved.current = JSON.stringify(value);
  };

  const queueSave = (value: Value) => {
    latestValue.current = value;

    if (timerId.current) {
      window.clearTimeout(timerId.current);
      timerId.current = null;
    }

    timerId.current = window.setTimeout(async () => {
      const v = latestValue.current;
      if (!v) return;

      const serialized = JSON.stringify(v);

      if (lastSaved.current === null) {
        lastSaved.current = serialized;
        return;
      }

      if (serialized === lastSaved.current) return;

      const seq = ++saveSeq.current;

      try {
        setStatus("saving");
        await mutation.mutateAsync(v);

        if (seq !== saveSeq.current) return;

        lastSaved.current = serialized;
        setStatus("saved");
      } catch {
        if (seq !== saveSeq.current) return;
        setStatus("error");
      }
    }, delayMs);
  };

  useEffect(() => {
    return () => {
      if (timerId.current) window.clearTimeout(timerId.current);
    };
  }, []);

  return { queueSave, setBaseline, status };
}
