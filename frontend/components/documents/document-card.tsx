/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDots, IconPencil, IconTrash } from "@tabler/icons-react";
import { toast } from "sonner";
import EditDocument from "@/components/documents/dialogs/edit-document";
import { useTrashDocumentMutation } from "@/hooks/document/useDocument";

interface CardData {
  id: string;
  topicId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export default function DocumentCard({ cardData }: { cardData: CardData }) {
  const [renameOpen, setRenameOpen] = useState(false);

  const trashMutation = useTrashDocumentMutation(cardData.topicId);

  async function handleTrash() {
    const ok = window.confirm(`Move "${cardData.title}" to Trash?`);
    if (!ok) return;

    try {
      await trashMutation.mutateAsync(cardData.id);
      toast.success("Moved to Trash");
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to delete document");
    }
  }

  return (
    <div className="flex flex-row gap-3 flex-wrap justify-start @lg:justify-start">
      <div className="flex flex-col min-w-32 max-w-56 rounded-xl shadow-sm hover:shadow-md border transition-all cursor-pointer">
        <Link
          href={`/topics/${cardData.topicId}/${cardData.id}`}
          className="w-full aspect-16/10 overflow-hidden rounded-t-xl"
        >
          <img
            src="https://youlearn-content-uploads.s3.amazonaws.com/thumbnails/pdf/x6R0LzzLtedX069.png"
            alt="preview"
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="p-3 flex flex-row gap-1 items-end justify-between">
          <div className="flex flex-col">
            <div className="text-sm font-medium line-clamp-1">
              {cardData.title}
            </div>
            <div className="text-xs text-muted-foreground">
              {"{TOPIC NAME}"}
            </div>
            <div className="text-xs text-muted-foreground">
              {cardData.updatedAt}
            </div>
          </div>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button type="button" className="p-1 rounded hover:bg-accent">
                <IconDots size={16} />
                <span className="sr-only">More</span>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-36 rounded-lg" align="end">
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  setRenameOpen(true);
                }}
              >
                <IconPencil size={16} />
                <span>Rename</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                variant="destructive"
                onClick={handleTrash}
                disabled={trashMutation.isPending}
              >
                <IconTrash size={16} />
                <span>
                  {trashMutation.isPending ? "Deleting..." : "Delete"}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <EditDocument
            open={renameOpen}
            onOpenChange={setRenameOpen}
            topicId={cardData.topicId}
            documentId={cardData.id}
            currentTitle={cardData.title}
          />
        </div>
      </div>
    </div>
  );
}
