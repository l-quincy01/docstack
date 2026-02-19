import DocumentCard from "@/components/documents/document-card";
import NewDocumentCard from "@/components/documents/new-document-card";
import React from "react";

export default function page() {
  const documents = [
    {
      name: "Introduction to React",
      date: "Jan 12, 2026",
      topic: "Frontend Development",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
      name: "Advanced TypeScript Guide",
      date: "Feb 02, 2026",
      topic: "Programming",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      name: "UI/UX Design Principles",
      date: "Dec 18, 2025",
      topic: "Design",
      thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    },
    {
      name: "Database Optimization Techniques",
      date: "Nov 30, 2025",
      topic: "Backend Development",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    },
    {
      name: "Machine Learning Basics",
      date: "Jan 05, 2026",
      topic: "Artificial Intelligence",
      thumbnail: "",
    },
  ];

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-row w-full justify-center ">
        <div className="text-2xl font-bold">IsiZulu Literature</div>
      </div>

      <div className="text-muted-foreground font-bold">
        Start a new document
      </div>
      <NewDocumentCard />

      <div className="flex flex-row flex-wrap gap-4">
        {documents.map((doc, index) => (
          <DocumentCard key={index} cardData={doc} />
        ))}
      </div>
    </div>
  );
}
