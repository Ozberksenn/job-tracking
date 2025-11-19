import { api, apiGet } from "../client";
import { MenuType } from "./types";


export const getAllMenu = async ():Promise<MenuType[]> => {
    const res = await apiGet("/getMenu");
    return res.data;
};