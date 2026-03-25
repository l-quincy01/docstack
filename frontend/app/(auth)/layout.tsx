import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";
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
        <div className="flex min-h-screen w-full overflow-hidden">
          <AppSidebar variant="inset" collapsible="offcanvas" />

          <div className="m-2 flex-1 min-h-0 rounded-md border bg-background/90 overflow-y-auto overflow-x-hidden scrollbar-hide">
            <main className="container mx-auto w-full px-4 py-2">
              <SiteHeader />
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Providers>
  );
}
