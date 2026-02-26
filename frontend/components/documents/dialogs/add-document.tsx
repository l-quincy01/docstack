"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCreateDocumentMutation } from "@/hooks/document/useDocument";
import { useParams } from "next/navigation";

export default function AddDocument() {
  const params = useParams<{ topicId: string }>();
  const topicId = params.topicId;

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const createDocMutation = useCreateDocumentMutation(topicId);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const cleanTitle = title.trim().replace(/\s+/g, " ");
    if (!cleanTitle) {
      setFormError("Document name is required");
      return;
    }

    if (!topicId) {
      const msg = "Missing topicId in URL";
      setFormError(msg);
      toast.error(msg);
      return;
    }

    try {
      await createDocMutation.mutateAsync(cleanTitle);
      toast.success("Document created");
      setTitle("");
      setOpen(false);
    } catch (e: any) {
      const msg = e?.message ?? "Failed to create document";
      setFormError(msg);
      toast.error(msg);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="relative rounded-xl aspect-square w-fit overflow-hidden cursor-pointer hover:border">
          <div className="absolute top-0 left-0 w-full h-[30%] bg-zinc-200 dark:bg-zinc-600" />
          <div className="absolute bottom-0 left-0 w-full h-[70%] bg-zinc-100 dark:bg-zinc-800" />

          <div className="relative p-4 flex flex-col justify-center items-start h-full">
            <Plus
              size={24}
              strokeWidth={1.5}
              className="transition-all duration-300 hover:scale-110"
            />
            <div className="text-muted-foreground text-xs">New document</div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Document</DialogTitle>
            <DialogDescription>Create a new Document.</DialogDescription>
          </DialogHeader>

          <FieldGroup className="mt-4">
            <Field>
              <Label htmlFor="doc-name">Document Name</Label>
              <Input
                id="doc-name"
                name="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name of Document"
                disabled={createDocMutation.isPending}
                autoFocus
              />
              {formError ? (
                <p className="text-sm text-destructive mt-1">{formError}</p>
              ) : null}
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                disabled={createDocMutation.isPending}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={createDocMutation.isPending}>
              {createDocMutation.isPending ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
