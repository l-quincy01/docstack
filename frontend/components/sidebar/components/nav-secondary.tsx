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
  Maximize2,
  Minimize2,
  Minus,
  PencilRuler,
  Plug,
  Plus,
  Timer,
  TimerIcon,
  ToolCase,
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
