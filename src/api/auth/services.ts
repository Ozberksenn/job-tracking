import { apiPost } from "../client";
import { LoginType } from "./types";


export const login = async (data:LoginType): Promise<any> => {
    const res = await apiPost("/login", {"Mail": data.email, "Password": data.password});
    return res.data;
};

