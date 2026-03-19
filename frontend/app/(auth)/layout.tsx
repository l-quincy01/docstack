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
        <div className="flex  h-screen  w-full ">
          <AppSidebar variant="inset" collapsible="offcanvas" />
          <div className=" bg-background/90 border rounded-md w-full h-[97vh] overflow-y-scroll overflow-x-hidden scrollbar-hide m-2">
            {" "}
            <main className="flex-1 w-full mx-auto container px-4 py-2 scrollbar-hide">
              <SiteHeader />
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Providers>
  );
}
