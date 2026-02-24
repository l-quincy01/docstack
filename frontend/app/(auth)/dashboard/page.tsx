"use client";
import AddDocumentDashboard from "@/components/documents/dialogs/add-document-dashboard";
import DocumentCard from "@/components/documents/document-card";
import { useMyProfile } from "@/hooks/profile/useProfile";
import { useAuth } from "@clerk/nextjs";

import { Plus } from "lucide-react";
import React, { useEffect } from "react";

export default function Page() {
  const { getToken } = useAuth();

  const { data, isLoading, isError, error } = useMyProfile();

  // useEffect(() => {
  //   const callApi = async () => {
  //     const token = await getToken();

  //     console.log("MY TOKEN:", token);

  //     if (!token) return;

  //     const res = await fetch("http://localhost:8080/api/test", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     console.log("API RESPONSE:", await res.text());
  //   };

  //   callApi();
  // }, [getToken]);

  function getTimeOfDayMessage(): string {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning ";
    } else if (hour < 18) {
      return "Good afternoon ";
    } else {
      return "Good evening ";
    }
  }

  if (isLoading) {
    return <div className="text-sm  text-muted">Loading</div>;
  }

  return (
    <div className="w-full">
      <div className=" flex flex-col gap-4 ">
        <div className="flex flex-row w-full justify-center ">
          <div className="text-2xl font-bold">
            {getTimeOfDayMessage()}
            {data?.firstName}
          </div>
        </div>

        <div className="text-muted-foreground font-bold">
          Start a new document
        </div>

        <AddDocumentDashboard />

        <div className="text-2xl font-bold">Recents</div>

        <DocumentCard
          cardData={{
            name: "Math Analysis",
            date: "2026 March 16",
            topic: "Math",
            thumbnail: "",
          }}
        />
      </div>
    </div>
  );
}
