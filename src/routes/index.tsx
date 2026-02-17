import Header from "@/components/Header";
import Hero from "@/components/pages/home/hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
