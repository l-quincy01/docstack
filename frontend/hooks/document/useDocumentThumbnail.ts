// "use client";

// import { RefObject, useEffect, useRef, useState } from "react";
// import type { Value } from "platejs";
// import html2canvas from "html2canvas-pro";

// import { uploadThumbnailToR2 } from "@/utils/uploadThumbnailToR2";
// import { patchDocumentThumbnail } from "@/utils/patchDocumentThumbnail";
// import { captureEditorThumbnailFromClone } from "@/utils/captureEditorThumbnail";

// type ThumbnailStatus = "idle" | "generating" | "uploading" | "saved" | "error";

// type Props = {
//   documentId: string;
//   targetRef: RefObject<HTMLDivElement | null>;
//   delayMs?: number;
// };

// export function useDocumentThumbnail({
//   documentId,
//   targetRef,
//   delayMs = 5000,
// }: Props) {
//   const [status, setStatus] = useState<ThumbnailStatus>("idle");

//   const timerId = useRef<number | null>(null);
//   const lastThumbSource = useRef<string | null>(null);
//   const latestValue = useRef<Value | null>(null);
//   const runSeq = useRef(0);

//   const setBaseline = (value: Value) => {
//     lastThumbSource.current = JSON.stringify(value);
//   };

//   const queueThumbnail = (value: Value) => {
//     latestValue.current = value;

//     if (timerId.current) {
//       window.clearTimeout(timerId.current);
//       timerId.current = null;
//     }

//     timerId.current = window.setTimeout(async () => {
//       const currentValue = latestValue.current;
//       const node = targetRef.current;

//       if (!currentValue || !node) return;

//       const serialized = JSON.stringify(currentValue);

//       if (lastThumbSource.current === serialized) {
//         return;
//       }

//       const seq = ++runSeq.current;

//       try {
//         setStatus("generating");

//         const blob = await captureEditorThumbnailFromClone(node);

//         if (seq !== runSeq.current) return;

//         setStatus("uploading");

//         const uploadResult = await uploadThumbnailToR2(blob, documentId);

//         if (seq !== runSeq.current) return;

//         await patchDocumentThumbnail(documentId, uploadResult.url);

//         if (seq !== runSeq.current) return;

//         lastThumbSource.current = serialized;
//         setStatus("saved");
//       } catch (error) {
//         console.error("Thumbnail pipeline failed", error);

//         if (seq !== runSeq.current) return;
//         setStatus("error");
//       }
//     }, delayMs);
//   };

//   useEffect(() => {
//     return () => {
//       if (timerId.current) {
//         window.clearTimeout(timerId.current);
//       }
//     };
//   }, []);

//   return {
//     status,
//     queueThumbnail,
//     setBaseline,
//   };
// }
"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import type { Value } from "platejs";

import { captureEditorThumbnailFromClone } from "@/utils/captureEditorThumbnail";
import { uploadThumbnailToR2 } from "@/utils/uploadThumbnailToR2";
import { patchDocumentThumbnail } from "@/utils/patchDocumentThumbnail";

type ThumbnailStatus = "idle" | "generating" | "uploading" | "saved" | "error";

type Props = {
  documentId: string;
  targetRef: RefObject<HTMLDivElement>;
  delayMs?: number;
};

export function useDocumentThumbnail({
  documentId,
  targetRef,
  delayMs = 5000,
}: Props) {
  const { getToken } = useAuth();

  const [status, setStatus] = useState<ThumbnailStatus>("idle");

  const timerId = useRef<number | null>(null);
  const lastThumbSource = useRef<string | null>(null);
  const latestValue = useRef<Value | null>(null);
  const runSeq = useRef(0);

  const setBaseline = (value: Value) => {
    lastThumbSource.current = JSON.stringify(value);
  };

  const queueThumbnail = (value: Value) => {
    latestValue.current = value;

    if (timerId.current) {
      window.clearTimeout(timerId.current);
      timerId.current = null;
    }

    timerId.current = window.setTimeout(async () => {
      const currentValue = latestValue.current;
      const node = targetRef.current;

      if (!currentValue || !node) return;

      const serialized = JSON.stringify(currentValue);
      if (lastThumbSource.current === serialized) return;

      const seq = ++runSeq.current;

      try {
        setStatus("generating");

        const blob = await captureEditorThumbnailFromClone(node);

        if (seq !== runSeq.current) return;

        const token = await getToken();

        setStatus("uploading");

        const uploadResult = await uploadThumbnailToR2(blob, documentId, token);

        if (seq !== runSeq.current) return;

        await patchDocumentThumbnail(documentId, uploadResult.url, token);

        if (seq !== runSeq.current) return;

        lastThumbSource.current = serialized;
        setStatus("saved");
      } catch (err) {
        console.error("Thumbnail pipeline failed", err);
        if (seq !== runSeq.current) return;
        setStatus("error");
      }
    }, delayMs);
  };

  useEffect(() => {
    return () => {
      if (timerId.current) window.clearTimeout(timerId.current);
    };
  }, []);

  return {
    status,
    queueThumbnail,
    setBaseline,
  };
}
