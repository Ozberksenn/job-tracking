import { apiGet, apiPost } from "../client";

export const getCompany = async (): Promise<any> => {
    const res = await apiGet("/getCompanyInfo");
    return res.data;
};

export const updateCompanyInfo = async (data:any): Promise<any> => {
    const res = await apiPost("/updateCompanyInfo", {"Mail": data.email, "Password": data.password});
    return res.data;
};

