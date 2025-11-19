import { useQuery } from "@tanstack/react-query";
import { getAllMenu } from "./services";
import { MenuType } from "./types";


export const useAllMenu = () =>
    useQuery<MenuType[]>({
        queryKey: ['menu'],
        queryFn: getAllMenu,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });