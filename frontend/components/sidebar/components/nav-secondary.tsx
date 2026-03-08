"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  File,
  Maximize2,
  Minimize2,
  ToolCase,
  Trash2,
  Undo2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { toast } from "sonner";
import {
  usePermanentDeleteDocumentMutation,
  useRecoverDocumentMutation,
  useTrashDocumentsQuery,
} from "@/hooks/document/useTrashDocuments";

export function NavSecondary() {
  const { isMobile } = useSidebar();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    data: documentTrash = [],
    isLoading,
    isError,
    error,
  } = useTrashDocumentsQuery();

  const recoverMutation = useRecoverDocumentMutation();
  const deleteMutation = usePermanentDeleteDocumentMutation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (typeof window === "undefined") return;

    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (e) {
      console.error("Error toggling fullscreen:", e);
    }
  };

  async function handleRecover(documentId: string, title: string) {
    try {
      await recoverMutation.mutateAsync(documentId);
      toast.success(`Recovered "${title}"`);
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to recover document");
    }
  }

  async function handlePermanentDelete(documentId: string, title: string) {
    const ok = window.confirm(`Delete "${title}" permanently?`);
    if (!ok) return;

    try {
      await deleteMutation.mutateAsync(documentId);
      toast.success(`Deleted "${title}" permanently`);
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to delete document");
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Popover>
          <PopoverTrigger asChild>
            <SidebarMenuButton tooltip="Utilities">
              <span className="mr-2">
                <Trash2 />
              </span>
              <span>Trash</span>
            </SidebarMenuButton>
          </PopoverTrigger>

          <PopoverContent className="w-fit ml-16">
            <Command className="w-md rounded-sm">
              <CommandInput
                className="border-none"
                placeholder="Search deleted documents..."
              />
              <CommandList>
                {isLoading && (
                  <div className="p-3 text-sm text-muted-foreground">
                    Loading trash...
                  </div>
                )}

                {isError && (
                  <div className="p-3 text-sm text-destructive">
                    {(error as Error)?.message ?? "Failed to load trash"}
                  </div>
                )}

                {!isLoading && !isError && documentTrash.length === 0 && (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}

                <CommandGroup heading="Deleted Documents">
                  {documentTrash.map((doc) => (
                    <CommandItem key={doc.id} value={doc.title}>
                      <div className="w-full flex flex-row justify-between items-center">
                        <div className="inline-flex items-center gap-2">
                          <File size={18} />
                          <span className="line-clamp-1">{doc.title}</span>
                        </div>

                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            className="p-2 cursor-pointer hover:bg-muted rounded-lg"
                            onClick={() => handleRecover(doc.id, doc.title)}
                            disabled={recoverMutation.isPending}
                            aria-label="Recover"
                          >
                            <Undo2 size={18} />
                          </button>

                          <button
                            type="button"
                            className="p-2 cursor-pointer hover:bg-muted rounded-lg"
                            onClick={() =>
                              handlePermanentDelete(doc.id, doc.title)
                            }
                            disabled={deleteMutation.isPending}
                            aria-label="Delete permanently"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton tooltip="Utilities">
              <span className="mr-2">
                <ToolCase size={18} />
              </span>
              <span>Utilities</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem onClick={toggleFullscreen}>
              {isFullscreen ? (
                <div className="flex flex-row gap-2">
                  <Minimize2 size={14} />
                  <span>Exit Fullscreen</span>
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <Maximize2 size={14} />
                  <span>Enter Fullscreen</span>
                </div>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
