"use client";

import * as React from "react";

import {
  ArrowUpToLineIcon,
  BaselineIcon,
  BoldIcon,
  CaseSensitive,
  Code2Icon,
  HighlighterIcon,
  Images,
  ItalicIcon,
  PaintBucketIcon,
  StrikethroughIcon,
  TextInitial,
  UnderlineIcon,
  WandSparklesIcon,
} from "lucide-react";
import { KEYS } from "platejs";
import { useEditorReadOnly } from "platejs/react";

import { AIToolbarButton } from "./ai-toolbar-button";
import { AlignToolbarButton } from "./align-toolbar-button";
import { CommentToolbarButton } from "./comment-toolbar-button";
import { EmojiToolbarButton } from "./emoji-toolbar-button";
import { ExportToolbarButton } from "./export-toolbar-button";
import { FontColorToolbarButton } from "./font-color-toolbar-button";
import { FontSizeToolbarButton } from "./font-size-toolbar-button";
import { RedoToolbarButton, UndoToolbarButton } from "./history-toolbar-button";
import { ImportToolbarButton } from "./import-toolbar-button";
import {
  IndentToolbarButton,
  OutdentToolbarButton,
} from "./indent-toolbar-button";
import { InsertToolbarButton } from "./insert-toolbar-button";
import { LineHeightToolbarButton } from "./line-height-toolbar-button";
import { LinkToolbarButton } from "./link-toolbar-button";
import {
  BulletedListToolbarButton,
  NumberedListToolbarButton,
  TodoListToolbarButton,
} from "./list-toolbar-button";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { MediaToolbarButton } from "./media-toolbar-button";
import { ModeToolbarButton } from "./mode-toolbar-button";
import { MoreToolbarButton } from "./more-toolbar-button";
import { TableToolbarButton } from "./table-toolbar-button";
import { ToggleToolbarButton } from "./toggle-toolbar-button";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoToolbarButton } from "./turn-into-toolbar-button";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="flex flex-row justify-center w-full ">
      {!readOnly && (
        <>
          <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <TurnIntoToolbarButton />
            <FontSizeToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-fit">
                <Button variant="outline">
                  <CaseSensitive />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Text</DropdownMenuLabel>

                  <div className="w-fit grid grid-cols-3">
                    <MarkToolbarButton
                      className="w-full"
                      nodeType={KEYS.bold}
                      tooltip="Bold (⌘+B)"
                    >
                      <BoldIcon />
                    </MarkToolbarButton>

                    <MarkToolbarButton
                      nodeType={KEYS.italic}
                      tooltip="Italic (⌘+I)"
                    >
                      <ItalicIcon />
                    </MarkToolbarButton>

                    <MarkToolbarButton
                      nodeType={KEYS.underline}
                      tooltip="Underline (⌘+U)"
                    >
                      <UnderlineIcon />
                    </MarkToolbarButton>

                    <MarkToolbarButton
                      nodeType={KEYS.strikethrough}
                      tooltip="Strikethrough (⌘+⇧+M)"
                    >
                      <StrikethroughIcon />
                    </MarkToolbarButton>

                    <FontColorToolbarButton
                      nodeType={KEYS.color}
                      tooltip="Text color"
                    >
                      <BaselineIcon />
                    </FontColorToolbarButton>
                  </div>

                  {/* <DropdownMenuItem className="w-fit">
                    <MarkToolbarButton
                      className="w-full"
                      nodeType={KEYS.bold}
                      tooltip="Bold (⌘+B)"
                    >
                      <BoldIcon />
                    </MarkToolbarButton>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <MarkToolbarButton
                      nodeType={KEYS.italic}
                      tooltip="Italic (⌘+I)"
                    >
                      <ItalicIcon />
                    </MarkToolbarButton>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <MarkToolbarButton
                      nodeType={KEYS.underline}
                      tooltip="Underline (⌘+U)"
                    >
                      <UnderlineIcon />
                    </MarkToolbarButton>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <MarkToolbarButton
                      nodeType={KEYS.strikethrough}
                      tooltip="Strikethrough (⌘+⇧+M)"
                    >
                      <StrikethroughIcon />
                    </MarkToolbarButton>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <FontColorToolbarButton
                      nodeType={KEYS.color}
                      tooltip="Text color"
                    >
                      <BaselineIcon />
                    </FontColorToolbarButton>
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>

                <DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <MarkToolbarButton nodeType={KEYS.code} tooltip="Code (⌘+E)">
              <Code2Icon />
            </MarkToolbarButton> */}

            {/* <FontColorToolbarButton
              nodeType={KEYS.backgroundColor}
              tooltip="Background color"
            >
              <PaintBucketIcon />
            </FontColorToolbarButton> */}
          </ToolbarGroup>

          <ToolbarGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <TextInitial />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Align</DropdownMenuLabel>

                  <div className="w-fit grid grid-cols-3">
                    {" "}
                    <AlignToolbarButton />
                    <NumberedListToolbarButton />
                    <BulletedListToolbarButton />
                    <TodoListToolbarButton />
                    <ToggleToolbarButton />
                    <TableToolbarButton />
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ToolbarGroup>

          <ToolbarGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {/* <TextInitial /> */}
                  <Images size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Align</DropdownMenuLabel>

                  <div className="w-fit grid grid-cols-3">
                    {" "}
                    <MediaToolbarButton nodeType={KEYS.img} />
                    <MediaToolbarButton nodeType={KEYS.video} />
                    <MediaToolbarButton nodeType={KEYS.audio} />
                    <MediaToolbarButton nodeType={KEYS.file} />
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ToolbarGroup>

          <ToolbarGroup>
            {/* <LinkToolbarButton /> */}
            {/* <TableToolbarButton /> */}
            <InsertToolbarButton />
            {/* <EmojiToolbarButton /> */}
          </ToolbarGroup>
        </>
      )}

      <ToolbarGroup>
        {/* */}
        {/* <CommentToolbarButton /> */}
      </ToolbarGroup>

      <ToolbarGroup>
        <ModeToolbarButton />
      </ToolbarGroup>
    </div>
  );
}
