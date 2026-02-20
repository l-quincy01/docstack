import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 54)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <div className="flex min-h-scree  w-full">
        <AppSidebar variant="floating" collapsible="icon" />
        <main className="flex-1  p-4 mx-2 container">
          <SiteHeader />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

{
  /*
  
  rounded-xl border-[0.5px] bg-background/75 
  */
}
