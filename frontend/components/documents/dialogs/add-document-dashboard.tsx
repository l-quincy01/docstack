/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useTopicsQuery } from "@/hooks/topics/useTopics";
import { useCreateDocumentMutation } from "@/hooks/document/useDocument";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddDocumentDashboard() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const { data: topics = [], isLoading } = useTopicsQuery();

  const [title, setTitle] = useState("");
  const [topicId, setTopicId] = useState("");
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
      const msg = "Please select a topic";
      setFormError(msg);
      toast.error(msg);
      return;
    }

    try {
      const created = await createDocMutation.mutateAsync(cleanTitle);

      toast.success("Document created");
      setTitle("");
      setTopicId("");
      setOpen(false);

      router.push(`/topics/${created.topicId}`);
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

          <div className="mt-4 space-y-2">
            <Label>Topic</Label>

            {isLoading ? (
              <div className="text-sm text-muted-foreground">
                Loading topics...
              </div>
            ) : topics.length < 1 ? (
              <div className="flex flex-row items-center gap-2 text-sm text-muted-foreground">
                No topics yet.
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setOpen(false);
                    router.push("/dashboard");
                  }}
                >
                  Create Topic
                </Button>
              </div>
            ) : (
              <NativeSelect
                value={topicId}
                onChange={(e) => setTopicId(e.target.value)}
                disabled={createDocMutation.isPending}
              >
                <NativeSelectOption value="" disabled>
                  Select a topic...
                </NativeSelectOption>

                {topics.map((topic) => (
                  <NativeSelectOption key={topic.id} value={topic.id}>
                    {topic.title}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            )}
          </div>

          <FieldGroup className="mt-4">
            <Field>
              <Label htmlFor="doc-title">Document Name</Label>
              <Input
                id="doc-title"
                name="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name of Document"
                disabled={createDocMutation.isPending}
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

            <Button
              type="submit"
              disabled={createDocMutation.isPending || topics.length < 1}
            >
              {createDocMutation.isPending ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
