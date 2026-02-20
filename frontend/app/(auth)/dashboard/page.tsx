import AddDocumentDashboard from "@/components/documents/dialogs/add-document-dashboard";
import DocumentCard from "@/components/documents/document-card";
import { Plus } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className=" flex flex-col gap-4 ">
        <div className="flex flex-row w-full justify-center ">
          <div className="text-2xl font-bold">Good Afternoon User</div>
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
