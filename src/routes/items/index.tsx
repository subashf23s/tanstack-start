import Header from "@/components/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <main>
        <h1>This is items</h1>
      </main>
    </>
  );
}
