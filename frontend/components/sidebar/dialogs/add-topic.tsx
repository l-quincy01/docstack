"use client";

import React, { useState } from "react";
import { CopyPlus } from "lucide-react";
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
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useCreateTopicMutation } from "@/hooks/topics/useTopics";
import { toast } from "sonner";

export default function AddTopic() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const createTopicMutation = useCreateTopicMutation();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const cleanTitle = title.trim().replace(/\s+/g, " ");

    if (!cleanTitle) {
      setFormError("Topic name is required");
      return;
    }

    try {
      await createTopicMutation.mutateAsync(cleanTitle);
      toast.success("Topic created");
      setTitle("");
      setOpen(false);
    } catch (e: any) {
      const message = e?.message ?? "Failed to create topic";
      setFormError(message);
      toast.error(message);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SidebarMenuButton>
          <CopyPlus size={18} />
          <span>Add Topics</span>
        </SidebarMenuButton>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Topic</DialogTitle>
            <DialogDescription>
              Create new topic where your documents will be stored.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="mt-4">
            <Field>
              <Label htmlFor="topic-name">Topic Name</Label>
              <Input
                id="topic-name"
                name="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name of Topic"
                disabled={createTopicMutation.isPending}
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
                disabled={createTopicMutation.isPending}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={createTopicMutation.isPending}>
              {createTopicMutation.isPending ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
