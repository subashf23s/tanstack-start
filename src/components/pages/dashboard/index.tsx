import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";

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
    <main className="container mx-auto py-8">
      <section>
        <Button onClick={handleSignOut}>Logout</Button>
      </section>
    </main>
  );
};

export default DashboardPage;
