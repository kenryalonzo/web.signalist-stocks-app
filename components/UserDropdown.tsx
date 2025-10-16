"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./Navitems";

const UserDropdown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  const user = { name: "John", email: "shit@bigGhost.com" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:bg-yellow-500"
        >
          <Avatar className="size-8">
            <AvatarImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcours-de-japonais.com%2Fdemon-slayer-noms-japonais%2F&psig=AOvVaw3zXBzTDr4JcPngxPBbQX90&ust=1759688971763000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDDp7OWi5ADFQAAAAAdAAAAABAo" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.email}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <Avatar className="size-8">
            <AvatarImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcours-de-japonais.com%2Fdemon-slayer-noms-japonais%2F&psig=AOvVaw3zXBzTDr4JcPngxPBbQX90&ust=1759688971763000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDDp7OWi5ADFQAAAAAdAAAAABAo" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
            <span className="text-base text-gray-500">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="size-4 w-4 mr-2 hidden sm:block" />
          Logout
          <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
          <nav className="sm:hidden">
            <NavItems />
          </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
