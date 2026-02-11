import ReservationPage from "@/components/pages/reservation";
import { getClientIp } from "@/util/functions/getClientIp";
// import { getServerTime } from "@/util/functions/getServerTime";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect } from "react";

export const Route = createFileRoute("/reservation/")({
  component: RouteComponent,
  // loader: async () => await getServerTime(),
});

function RouteComponent() {
  // const time = Route.useLoaderData();
  const getIp = useServerFn(getClientIp);
  useEffect(() => {
    getIp().then(console.log).catch(console.error);
  }, []);
  return <ReservationPage />;
}
