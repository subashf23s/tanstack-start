import { Link } from "@tanstack/react-router";
import Logo from "./Logo";
import { ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  return (
    <header className="bg-black text-white sticky top-0">
      <section className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <Nav open={open} handleOpen={handleOpen} />
        <Link
          to="/reservation"
          activeProps={{ className: "bg-yellow-500 text-black" }}
          inactiveProps={{ className: "text-yellow-500" }}
          className="uppercase font-bold text-xs md:text-sm border md:border-2  py-1 px-2 md:px-5 ml-auto md:ml-0"
        >
          Make a Reservation
        </Link>
        <Button
          size={"icon-sm"}
          className="ml-2 inline-flex md:hidden"
          onClick={handleOpen}
        >
          <Menu />
        </Button>
      </section>
    </header>
  );
}

const Nav = ({
  open,
  handleOpen,
  className,
  ...props
}: ComponentProps<"nav"> & { open: boolean; handleOpen: () => void }) => {
  const navigations = [
    {
      id: 1,
      label: "Items",
      link: "/items",
    },
    {
      id: 2,
      label: "Events",
      link: "/events",
    },
    { id: 3, label: "Gallery", link: "/gallery" },
  ];
  return (
    <nav
      className={cn(
        "text-sm font-semibold fixed md:relative inset-y-0 w-full md:w-auto right-0 transition-transform duration-300 ease-in-out",
        !open && "translate-x-full md:translate-x-0",
        className,
      )}
      {...props}
    >
      <ul className="flex flex-col md:flex-row items-center gap-4 bg-gray-800 py-4 md:py-1 px-3 rounded-b-2xl md:rounded-b-none shadow-2xl">
        <div className="flex md:hidden justify-end w-full ">
          <Button size={"icon-sm"} onClick={handleOpen}>
            <X />
          </Button>
        </div>
        {navigations.map((nav) => (
          <li className="inline-flex w-full " key={nav.id}>
            <Link
              to={nav.link}
              activeProps={{ className: "bg-gray-100 text-gray-800" }}
              className="py-1 px-3 transition-all duration-300 w-full border md:border-0"
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
