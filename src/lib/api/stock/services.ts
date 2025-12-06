import { apiDelete, apiGet, apiPost, apiPut } from "../client";
import { MenuType, ProductType } from "./types";

export const getAllMenu = async (): Promise<MenuType[]> => {
    const res = await apiGet("/getMenu");
    return res.data;
};

export const getProductByMenuId = async (menuId: number): Promise<ProductType[]> => {
    const res = await apiGet(`/getProductByMenuId?MenuId=${menuId}`);
    return res.data;
};

export const postProduct = async (data: ProductType): Promise<MenuType[]> => {
    const res = await apiPost("/createProducts", data);
    return res.data;
};

export const updateProduct = async (data: ProductType): Promise<MenuType[]> => {
    const res = await apiPut("/updateProduct", data);
    return res.data;
};

export const deleteProduct = async (id: number) => {
    const res = await apiDelete("/deleteProduct", { "ProductId": id });
    return res.data;
};

export const createMenu = async (data:MenuType) => {
    const res = await apiPost("/postMenu",data);
    return res.data;
};

export const updateMenu = async (data:MenuType) => {
    const res = await apiPut("/updateMenu",data);
    return res.data;
};

export const deleteMenu = async (id: number) => {
    const res = await apiDelete("/deleteMenu", { "MenuId": id });
    return res.data;
};
