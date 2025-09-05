'use client'
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "@/components/ui/input"
import { useAppSelector } from "@/hooks/use-redux";

const Navbar = () => {
    const menu = useAppSelector((state) => state.main.menu)
    return (
       <nav className="p-4 flex items-center justify-between">
        <div className="flex flex-row items-center">
         <SidebarTrigger />
         <h3 className="pl-4">{menu}</h3>
        </div>
        <div className="flex items-center gap-4">
            <Input type="text" placeholder="search" />
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem >
                Light
                </DropdownMenuItem>
                <DropdownMenuItem >
                Dark
                </DropdownMenuItem>
                <DropdownMenuItem >
                System
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            <div></div>
        </div>
    </nav>
    )
}

export default Navbar;