import { useQuery } from "@tanstack/react-query";
import { getAllMenu, getProductByMenuId, getProductVariantById } from "./services";
import { MenuType, ProductType, ProductVariantType } from "./types";


export const useAllMenu = () =>
    useQuery<MenuType[]>({
        queryKey: ['menu'],
        queryFn: getAllMenu,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });


export const useProductByMenuId = (menuId: number | null) =>
    useQuery<ProductType[]>({
        queryKey: ['product', menuId],
        queryFn: () => getProductByMenuId(menuId!),
        enabled: !!menuId,
    });


export const useProductVariantById = (productId: number | null) =>
    useQuery<ProductVariantType[]>({
        queryKey: ['productVariant', productId],
        queryFn: () => getProductVariantById(productId!),
        enabled: !!productId,
    });