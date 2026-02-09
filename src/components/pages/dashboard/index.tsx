import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";
import AppSidebar from "./app-sidebar";

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
        <header>
          <SidebarTrigger className="-ml-1" />
        </header>
        <main className="container mx-auto py-8">
          <section>
            <Button onClick={handleSignOut}>Logout</Button>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
