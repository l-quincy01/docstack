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
import { useRenameTopicMutation } from "@/hooks/topics/useTopics";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  topicId: string;
  topicTitle: string;
}

export default function EditTopic({
  open,
  onOpenChange,
  topicId,
  topicTitle,
}: Props) {
  const [title, setTitle] = useState(topicTitle);
  const [formError, setFormError] = useState<string | null>(null);

  const renameTopicMutation = useRenameTopicMutation();

  useEffect(() => {
    if (open) {
      setTitle(topicTitle);
      setFormError(null);
    }
  }, [open, topicTitle]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const cleanTitle = title.trim().replace(/\s+/g, " ");

    if (!cleanTitle) {
      setFormError("Topic name is required");
      return;
    }

    if (cleanTitle === topicTitle.trim()) {
      onOpenChange(false);
      return;
    }

    try {
      await renameTopicMutation.mutateAsync({
        topicId,
        title: cleanTitle,
      });

      toast.success("Topic renamed");
      onOpenChange(false);
    } catch (e: any) {
      const message = e?.message ?? "Failed to rename topic";
      setFormError(message);
      toast.error(message);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Rename Topic</DialogTitle>
            <DialogDescription>Rename your topic.</DialogDescription>
          </DialogHeader>

          <FieldGroup className="mt-4">
            <Field>
              <Label htmlFor={`topic-name-${topicId}`}>Topic Name</Label>
              <Input
                id={`topic-name-${topicId}`}
                name="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name of Topic"
                disabled={renameTopicMutation.isPending}
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
                disabled={renameTopicMutation.isPending}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={renameTopicMutation.isPending}>
              {renameTopicMutation.isPending ? "Renaming..." : "Rename"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
