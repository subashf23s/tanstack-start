import Header from "@/components/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <main>
        <h1>This is events</h1>
      </main>
    </>
  );
}
