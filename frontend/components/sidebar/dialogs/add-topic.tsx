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

export default function AddTopic() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <SidebarMenuButton>
            <CopyPlus size={18} />
            <span> Add Topics </span>
          </SidebarMenuButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Topic</DialogTitle>
            <DialogDescription>
              Create new topic where your documents will be stored.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Topic Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue=""
                placeholder="Name of Topic"
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
