import { useQuery } from "@tanstack/react-query";
import { getAllMenu, getProductByMenuId } from "./services";
import { MenuType, ProductType } from "./types";


export const useAllMenu = () =>
    useQuery<MenuType[]>({
        queryKey: ['menu'],
        queryFn: getAllMenu,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });


export const useProductByMenuId = (menuId:number | null) =>
    useQuery<ProductType[]>({
        queryKey: ['product',menuId],
        queryFn:() => getProductByMenuId(menuId!),
        enabled: !!menuId, // Disable automatic query on mount
    });