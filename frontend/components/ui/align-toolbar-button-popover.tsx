"use client";

import * as React from "react";

import type { Alignment } from "@platejs/basic-styles";
import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

import { TextAlignPlugin } from "@platejs/basic-styles/react";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";

import { useEditorPlugin, useSelectionFragmentProp } from "platejs/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { ToolbarButton } from "./toolbar";

const items = [
  { icon: AlignLeftIcon, value: "left" },
  { icon: AlignCenterIcon, value: "center" },
  { icon: AlignRightIcon, value: "right" },
  { icon: AlignJustifyIcon, value: "justify" },
];

export function AlignToolbarButtonPopover(props: DropdownMenuProps) {
  const { editor, tf } = useEditorPlugin(TextAlignPlugin);

  const value =
    useSelectionFragmentProp({
      defaultValue: "left",
      getProp: (node) => node.align,
    }) ?? "left";

  const [open, setOpen] = React.useState(false);

  const IconValue =
    items.find((item) => item.value === value)?.icon ?? AlignLeftIcon;

  return (
    <Select
      value={value}
      onValueChange={(val) => {
        tf.textAlign.setNodes(val as Alignment);
        editor.tf.focus();
      }}
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <SelectTrigger asChild>
        <IconValue />
      </SelectTrigger>

      <SelectContent className="min-w-0" align="start">
        <SelectGroup>
          {items.map(({ icon: Icon, value: itemValue }) => (
            <SelectItem key={itemValue} value={itemValue} className="pl-2">
              <div className="flex items-center gap-2">
                <Icon />
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

/*

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

*/

/*
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>Description text here.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>

*/
