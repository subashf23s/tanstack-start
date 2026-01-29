import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reservation/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/reservation/"!</div>;
}
