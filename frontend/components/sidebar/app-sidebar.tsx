"use client";

import * as React from "react";
import { IconSettings } from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  CalendarDays,
  FileStack,
  House,
  LayoutDashboard,
  LibraryBig,
  MessageCircle,
} from "lucide-react";

import Image from "next/image";

// import sb_logo_dark from "@/assets/logo/sb_logo_dark.png";
// import sb_logo_light from "@/assets/logo/sb_logo_light.png";
import { useTheme } from "next-themes";
import Link from "next/link";
import { NavMain } from "./components/nav-main";
import { NavCourses } from "./components/nav-courses";
import { NavSecondary } from "./components/nav-secondary";
import { NavUser } from "./components/nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
  ],
};

const course_data = {
  courses: [
    {
      id: "1",
      date_created: "",
      course_title: "Lingustics",
      module: [
        {
          id: "1",
          module_name: "IsiZulu Literature",
          url: "/topics/aa4rtc665",
          children: [],
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { systemTheme } = useTheme();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-row">
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/" className="flex flex-row gap-1 items-center">
                <FileStack />

                <span className="font-bold text-md">DocStack</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="scrollbar-hide">
        <NavMain items={data.navMain} />
        <NavCourses courses={course_data.courses} />
      </SidebarContent>

      <SidebarFooter>
        <NavSecondary />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
