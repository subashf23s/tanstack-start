import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";
import AppSidebar from "./app-sidebar";
import Logout from "./logout";

const DashboardPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <SidebarTrigger className="-ml-1" />
          <Logout />
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
