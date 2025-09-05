"use client";
import {
  User,
  BookA,
  FileStack,
  User2,
  ChevronUp
} from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { menu,MenuType } from '../layout/menu';
import { useAppDispatch } from "@/hooks/use-redux";
import { selectMenu } from "@/features/main/mainSlice";

const AppSidebar = () => {
    const dispatch = useAppDispatch()

    const handleItem = (title : string) => {
        dispatch(selectMenu(title))
    }


    return (
        <Sidebar collapsible="icon" >
            <SidebarHeader>
                <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                    <Link href="/">
                        <Image src="/etka-logo.png" alt="logo" width={80} height={80} />
                    </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarSeparator />
            </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel>Etka job Tracking</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {menu.map((item : MenuType) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton onClick={() => handleItem(item.title)} asChild >
                                <Link href={item.url}>
                                <item.icon />
                                 <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton  >
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                        <Link href="/#">
                            <BookA />
                            Tanımlamalar
                        </Link>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                <Link href="/#">
                                    <FileStack />
                                    Departmanlar
                                </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                <Link href="/#">
                                    <User />
                                    kullanıcılar
                                </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                        <User2 />Özberk Şen<ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Account</DropdownMenuItem>
                        <DropdownMenuItem>Setting</DropdownMenuItem>
                        <DropdownMenuItem>Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}


export default AppSidebar