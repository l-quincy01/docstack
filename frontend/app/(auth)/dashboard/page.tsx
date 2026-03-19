"use client";
import AddDocumentDashboard from "@/components/documents/dialogs/add-document-dashboard";
import DocumentCard from "@/components/documents/document-card";
import { useActiveDocumentsByUserQuery } from "@/hooks/document/useDocument";
import { useMyProfile } from "@/hooks/profile/useProfile";

export default function Page() {
  const { data, isLoading } = useMyProfile();

  const { data: userDocuments } = useActiveDocumentsByUserQuery();

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

        <div className="flex flex-row flex-wrap gap-4">
          {userDocuments?.map((doc) => (
            <DocumentCard key={doc.id} cardData={doc} />
          ))}
        </div>
      </div>
    </div>
  );
}
