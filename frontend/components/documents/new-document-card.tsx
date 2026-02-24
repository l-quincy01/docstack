import { Plus } from "lucide-react";
import React from "react";

export default function NewDocumentCard() {
  return (
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
  );
}
