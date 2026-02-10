import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { ComponentProps } from "react";

const Logout = ({ ...props }: ComponentProps<typeof Popover>) => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/login" });
        },
      },
    });
  };
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button size={"icon"} className="cursor-pointer">
          <LogOut />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="rounded-none w-fit">
        <PopoverHeader>Are you sure want to Logout?</PopoverHeader>
        <PopoverDescription className="flex justify-end gap-2">
          {/* <Button
            variant={"outline"}
            className="py-0.5 px-2 h-min text-xs font-semibold"
          >
            Cancel
          </Button> */}
          <Button
            onClick={handleSignOut}
            variant={"destructive"}
            className="py-0.5 px-2 h-min text-xs font-semibold cursor-pointer"
          >
            Logout
          </Button>
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  );
};

export default Logout;
