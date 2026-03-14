"use client";

import { create } from "zustand";

type SelectedDoc = {
  id: string;
  title: string;
};

type DocumentLinkPickerState = {
  open: boolean;
  topicId: string;
  openPicker: (topicId: string) => void;
  closePicker: () => void;
};

export const useDocumentLinkPickerStore = create<DocumentLinkPickerState>(
  (set) => ({
    open: false,
    topicId: "",
    openPicker: (topicId) =>
      set({
        open: true,
        topicId,
      }),
    closePicker: () =>
      set({
        open: false,
      }),
  })
);
