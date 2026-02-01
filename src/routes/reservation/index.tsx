import ReservationPage from "@/components/pages/reservation";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reservation/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ReservationPage />;
}
