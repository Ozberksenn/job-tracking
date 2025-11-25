import { api, apiGet } from "../client";
import { MenuType, ProductType } from "./types";


export const getAllMenu = async (): Promise<MenuType[]> => {
    const res = await apiGet("/getMenu");
    return res.data;
};

export const getProductByMenuId = async (menuId: number): Promise<ProductType[]> => {
    debugger;
    const res = await apiGet(`/getProductByMenuId?MenuId=${menuId}`);
    debugger;
    return res.data;
};