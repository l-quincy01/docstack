"use client";

import * as React from "react";
import { Check, FileText, Search } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useDocumentsByTopicQuery } from "@/hooks/document/useDocument";

type DocumentLinkPickerModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  topicId: string;
  currentlyOpenDocumentId: string;
  onSelectDocument: (doc: { id: string; title: string }) => void;
};

export function DocumentLinkPickerModal({
  open,
  onOpenChange,
  topicId,
  currentlyOpenDocumentId,
  onSelectDocument,
}: DocumentLinkPickerModalProps) {
  const { data: documents = [], isLoading } = useDocumentsByTopicQuery(
    topicId,
    {
      enabled: open && !!topicId,
    }
  );

  const topicDocuments = documents.filter(
    (doc) => doc.id !== currentlyOpenDocumentId
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Link document</DialogTitle>
        </DialogHeader>

        <Command className="rounded-lg  w-full bg-transparent">
          <div className="flex items-center  px-3">
            <CommandInput
              className="border-0  bg-transparent w-full"
              placeholder="Search documents.."
            />
          </div>

          <CommandList className="">
            <CommandEmpty>
              {isLoading ? "Loading documents..." : "No documents found."}
            </CommandEmpty>

            <CommandGroup heading="Documents">
              {topicDocuments.map((doc) => (
                <CommandItem
                  key={doc.id}
                  value={`${doc.title} ${doc.id}`}
                  onSelect={() => {
                    onSelectDocument({
                      id: doc.id,
                      title: doc.title,
                    });
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{doc.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
