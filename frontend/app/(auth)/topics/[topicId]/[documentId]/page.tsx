"use client";
import { PlateEditor } from "@/components/editor/plate-editor";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";
import { Toaster } from "sonner";

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center  scrollbar-hide">
      <div className="w-full flex flex-row justify-start items-center gap-2 ">
        <div
          onClick={() => {
            router.back();
          }}
          className="inline-flex items-center justify-center rounded-xl hover:bg-muted p-2 text-sm cursor-pointer "
        >
          <ChevronLeft size={20} strokeWidth={1.5} /> Back
        </div>
      </div>

      <PlateEditor />
      <Toaster />
    </div>
  );
}
