import { HeroHeader } from "@/components/navigation/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroHeader />
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
}
