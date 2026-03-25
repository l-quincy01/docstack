"use client";

import React, { useState } from "react";
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
import { StaticPlatePreview } from "@/components/editor/StaticPlatePreview";
import { useAuth } from "@clerk/nextjs";
import { updateDocumentContent } from "@/services/documents/documents.service";

interface TemplateData {
  title: string;
  templateCategory: string;
  content: any;
}

interface TemplateProps {
  templateData: TemplateData;
}

export default function AddDocumentTemplates({ templateData }: TemplateProps) {
  const params = useParams<{ topicId: string }>();
  const topicId = params.topicId;

  const { getToken } = useAuth();

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
      const newDoc = await createDocMutation.mutateAsync(cleanTitle);

      const token = await getToken();
      if (!token) throw new Error("Not authenticated");

      await updateDocumentContent(
        newDoc.id,
        structuredClone(templateData.content),
        token
      );

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
      <DialogTrigger
        asChild
        className="flex flex-col min-w-32 max-w-56 rounded-xl shadow-sm hover:shadow-md border transition-all cursor-pointer"
      >
        <div className="flex flex-col max-h-[13rem]">
          <StaticPlatePreview value={templateData.content} />
          <div className="p-3 flex flex-row gap-1 items-end justify-between">
            <div className="flex flex-col">
              <div className="text-sm font-medium line-clamp-1">
                {templateData.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {templateData.templateCategory}
              </div>
            </div>
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
