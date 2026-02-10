import DashboardPage from "@/components/pages/dashboard";
import { authMiddleware } from "@/util/middleware/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
});

function RouteComponent() {
  return <DashboardPage />;
}
