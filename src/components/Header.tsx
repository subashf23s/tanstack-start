import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <section className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <nav className="text-sm font-semibold">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/reservation"
          className="uppercase font-bold text-sm text-yellow-500 border-2 rounded-lg py-1 px-5"
        >
          Make a Reservation
        </Link>
      </section>
    </header>
  );
}
