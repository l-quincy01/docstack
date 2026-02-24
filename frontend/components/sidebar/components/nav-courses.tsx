"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  // SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";
import {
  CirclePlus,
  CopyPlus,
  EllipsisVertical,
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

import { ChevronRight, House, MessageCircle, File, Folder } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AddTopic from "../dialogs/add-topic";
import { IconDots, IconTrash } from "@tabler/icons-react";

interface props {
  courses: course[];
}

export interface course {
  id: string;
  course_title: string;
  module: TreeNode[];
  date_created: string;
}

type TreeNode = {
  id: string;
  module_name: string;
  url: string;
  children?: TreeNode[];
};

export function NavCourses({ courses }: props) {
  // const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <span className="text-base font-semibold inline-flex ">Topics</span>

      <SidebarMenu className="mt-4">
        <SidebarMenuItem>
          <AddTopic />
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarMenu className=" ">
        {courses.map((course, index) => (
          <SidebarMenuItem key={index}>
            {course.module.map((item, index) => (
              <div key={index}>
                <SidebarMenuButton
                  key={index}
                  // isActive={isActive}
                  className="data-[active=true]:bg-transparent"
                  asChild
                >
                  <Link href={item.url}>
                    {/* <File /> */}
                    <div className={`line-clamp-1 `}>{item.module_name}</div>
                  </Link>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction
                      showOnHover
                      className="data-[state=open]:bg-accent rounded-sm"
                    >
                      <IconDots />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-24 rounded-lg">
                    <DropdownMenuItem variant="destructive">
                      <IconTrash />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
