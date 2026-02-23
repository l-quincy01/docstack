"use client";

import * as React from "react";
import { type Icon } from "@tabler/icons-react";

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
  Minus,
  PencilRuler,
  Plug,
  Plus,
  Timer,
  TimerIcon,
  ToolCase,
  Trash2,
  Undo2,
} from "lucide-react";

import { useRef, useState, useEffect } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function NavSecondary() {
  const { isMobile } = useSidebar();

  const [isFullscreen, setIsFullscreen] = useState(false);

  //fullscreen functionality
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  //toggling fullscreen
  const toggleFullscreen = async () => {
    if (typeof window === "undefined") return;

    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);

      try {
        const elem = document.documentElement as any;
        if (elem.webkitRequestFullscreen) {
          await elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          await elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          await elem.msRequestFullscreen();
        }
      } catch (fallbackError) {
        console.error("Fullscreen not supported:", fallbackError);
      }
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Popover>
          <PopoverTrigger asChild>
            <SidebarMenuButton tooltip="Utilities">
              <span className="mr-2">
                <Trash2 />
              </span>
              <span>Trash </span>
            </SidebarMenuButton>
          </PopoverTrigger>

          <PopoverContent className="w-fit ml-16">
            <Command className=" w-md rounded-sm ">
              <CommandInput
                className="border-none"
                placeholder="Search deleted documents..."
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Deleted Documents">
                  <CommandItem>
                    <div className="w-full flex flex-row justify-between items-center">
                      <div className="inline-flex items-center gap-2">
                        <File size={18} />
                        Name of Document
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <div className="p-2 cursor-pointer hover:bg-muted rounded-lg">
                          <Undo2 size={18} />
                        </div>
                        <div className="p-2 cursor-pointer hover:bg-muted rounded-lg">
                          <Trash2 size={18} />
                        </div>
                      </div>
                    </div>
                  </CommandItem>
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
              <span>Utilities </span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem onClick={toggleFullscreen} className="">
              {isFullscreen ? (
                <div className="flex flex-row gap-2  ">
                  <Minimize2 size={14} />
                  <span>Exit Fullscreen</span>
                </div>
              ) : (
                <div className="flex flex-row gap-2 ">
                  {" "}
                  <Maximize2 size={14} /> <span>Enter Fullscreen</span>
                </div>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>

      {/*Connect to LMS Form */}
    </SidebarMenu>
  );
}
