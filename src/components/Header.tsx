import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <section className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <nav className="text-sm font-semibold">
          <ul className="flex items-center gap-4 bg-gray-800 py-2 px-4 rounded-xl">
            <li>
              <Link
                to="/items"
                activeProps={{ className: "bg-gray-100 text-gray-800" }}
                className="py-1 px-3 rounded-md transition-all duration-300"
              >
                Items
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                activeProps={{ className: "bg-gray-100 text-gray-800" }}
                className="py-1 px-3 rounded-md transition-all duration-300"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                activeProps={{ className: "bg-gray-100 text-gray-800" }}
                className="py-1 px-3 rounded-md transition-all duration-300"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/reservation"
          activeProps={{ className: "bg-yellow-500 text-black" }}
          inactiveProps={{ className: "text-yellow-500" }}
          className="uppercase font-bold text-sm border-2 rounded-lg py-1 px-5"
        >
          Make a Reservation
        </Link>
      </section>
    </header>
  );
}
