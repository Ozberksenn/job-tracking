import { api, apiDelete, apiGet, apiPost, apiPut } from "../client";
import { MenuType, ProductType } from "./types";


export const getAllMenu = async (): Promise<MenuType[]> => {
    const res = await apiGet("/getMenu");
    return res.data;
};

export const getProductByMenuId = async (menuId: number): Promise<ProductType[]> => {
    const res = await apiGet(`/getProductByMenuId?MenuId=${menuId}`);
    debugger;
    return res.data;
};

export const postProduct = async (data: ProductType): Promise<MenuType[]> => {
    const res = await apiPost("/createProducts", data);
    return res.data;
};

export const updateProduct = async (data: ProductType): Promise<MenuType[]> => {
    debugger;
    const res = await apiPut("/updateProduct", data);
    return res.data;
};


export const deleteProduct = async (id: number) => {
    const res = await apiDelete("/deleteProduct", { "ProductId": id });
    return res.data;
};