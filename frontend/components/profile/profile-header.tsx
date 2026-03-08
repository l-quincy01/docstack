"use client";
import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, University } from "lucide-react";
import { useMyProfile } from "@/hooks/profile/useProfile";
import { useSidebar } from "../ui/sidebar";
import { useClerk } from "@clerk/nextjs";

export default function ProfileHeader() {
  const { data, isLoading, isError, error } = useMyProfile();

  const { isMobile } = useSidebar();

  const { signOut } = useClerk();

  if (isLoading) {
    return <div className="text-sm  text-muted">Loading</div>;
  }

  return (
    <Card className="bg-accent/20 border-none">
      <CardContent className="p-6 bg-transparent">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src={"https://i.redd.it/8ugv2z5fdj7f1.png"} />
            <AvatarFallback className="text-2xl"></AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Mail className="size-4" />
              {data?.email}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
