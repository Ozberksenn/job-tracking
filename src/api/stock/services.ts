import { api, apiGet } from "../client";


export const getAllMenu = async () => {
    const res = await apiGet("/getMenu");
    return res.data;
};