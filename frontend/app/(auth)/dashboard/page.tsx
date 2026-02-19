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

        <div className="relative rounded-xl aspect-square w-fit overflow-hidden cursor-pointer hover:border">
          <div className="absolute top-0 left-0 w-full h-[30%] bg-zinc-200 dark:bg-zinc-600" />
          <div className="absolute bottom-0 left-0 w-full h-[70%] bg-zinc-100 dark:bg-zinc-800" />

          <div className="relative p-4 flex flex-col justify-center items-start h-full">
            <Plus
              size={24}
              strokeWidth={1.5}
              className="transition-all duration-300 hover:scale-110"
            />
            <div className="text-muted-foreground text-xs">New document</div>
          </div>
        </div>

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
