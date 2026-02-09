import Logo from "@/components/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { ComponentProps } from "react";

const navigations = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
];

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex items-center justify-center py-5">
        <Logo />
      </SidebarHeader>
      <hr />
      <SidebarContent>
        <SidebarMenu className="p-4">
          {navigations.map((nav) => (
            <SidebarMenuItem key={nav.title}>
              <SidebarMenuButton asChild className="rounded-none">
                <Link
                  to={nav.url}
                  activeProps={{
                    className:
                      "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                  }}
                >
                  <nav.icon />
                  {nav.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
