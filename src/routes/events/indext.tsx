import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events/indext")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/events/indext"!</div>;
}
