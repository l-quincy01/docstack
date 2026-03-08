"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRenameDocumentMutation } from "@/hooks/document/useDocument";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  topicId: string;
  documentId: string;
  currentTitle: string;
}

export default function EditDocument({
  open,
  onOpenChange,
  topicId,
  documentId,
  currentTitle,
}: Props) {
  const [title, setTitle] = useState(currentTitle);
  const [formError, setFormError] = useState<string | null>(null);

  const renameMutation = useRenameDocumentMutation(topicId);

  useEffect(() => {
    if (open) {
      setTitle(currentTitle);
      setFormError(null);
    }
  }, [open, currentTitle]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const clean = title.trim().replace(/\s+/g, " ");
    if (!clean) {
      setFormError("Document name is required");
      return;
    }

    if (clean === currentTitle.trim()) {
      onOpenChange(false);
      return;
    }

    try {
      await renameMutation.mutateAsync({ documentId, title: clean });
      toast.success("Document renamed");
      onOpenChange(false);
    } catch (e: any) {
      const msg = e?.message ?? "Failed to rename document";
      setFormError(msg);
      toast.error(msg);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Rename Document</DialogTitle>
            <DialogDescription>Update the document name.</DialogDescription>
          </DialogHeader>

          <FieldGroup className="mt-4">
            <Field>
              <Label htmlFor={`doc-name-${documentId}`}>Document Name</Label>
              <Input
                id={`doc-name-${documentId}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={renameMutation.isPending}
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
                disabled={renameMutation.isPending}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={renameMutation.isPending}>
              {renameMutation.isPending ? "Renaming..." : "Rename"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
