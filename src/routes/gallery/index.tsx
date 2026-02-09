import Header from "@/components/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <main>
        <h1>This is gallery</h1>
      </main>
    </>
  );
}
