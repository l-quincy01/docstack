import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { Providers } from "@/app/provider/providers";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 54)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <div className="flex  h-screen  w-full">
          <AppSidebar variant="floating" collapsible="icon" />
          <main className="flex-1 w-full mx-auto container p-4">
            <SiteHeader />
            {children}
          </main>
        </div>
      </SidebarProvider>
    </Providers>
  );
}
