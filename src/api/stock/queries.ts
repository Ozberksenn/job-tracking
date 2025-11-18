import { useQuery } from "@tanstack/react-query";
import { getAllMenu } from "./services";


export const useAllMenu = () =>
    useQuery({
        queryKey: ['menu'],
        queryFn: getAllMenu,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });