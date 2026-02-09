import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";
import AppSidebar from "./app-sidebar";
import { LogOut } from "lucide-react";

const DashboardPage = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/login" });
        },
      },
    });
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <SidebarTrigger className="-ml-1" />
          <Button
            onClick={handleSignOut}
            size={"icon"}
            className="cursor-pointer"
          >
            <LogOut />
          </Button>
        </header>
        <main className="container mx-auto py-8">
          <section></section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
