import ReservationPage from "@/components/pages/reservation";
import { getServerTime } from "@/util/functions/getServerTime";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reservation/")({
  component: RouteComponent,
  loader: async () => await getServerTime(),
});

function RouteComponent() {
  const time = Route.useLoaderData();
  return <ReservationPage time={time} />;
}
