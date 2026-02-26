import React from "react";
import {
  CirclePlus,
  CopyPlus,
  FolderPlus,
  Library,
  LibraryBig,
  Plus,
  PlusCircle,
} from "lucide-react";
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
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useTopicsQuery } from "@/hooks/topics/useTopics";

export default function AddDocumentDashboard() {
  const { data: topics = [], isLoading, isError, error } = useTopicsQuery();

  console.log("topic length", topics.length);
  return (
    <Dialog>
      <form>
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
          <DialogHeader>
            <DialogTitle>Add Document</DialogTitle>
            <DialogDescription>Create a new Document.</DialogDescription>
          </DialogHeader>
          <NativeSelect>
            {topics.length < 1 ? (
              <div className="flex flex-row items-center gap-2">
                No topics yet.{" "}
                <Button type="button" variant="outline">
                  Create Topic
                </Button>
              </div>
            ) : (
              topics.map((topic, index) => (
                <NativeSelectOption key={index} value={`${topic.id}`}>
                  {topic.title}
                </NativeSelectOption>
              ))
            )}
          </NativeSelect>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Document Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue=""
                placeholder="Name of Document"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
