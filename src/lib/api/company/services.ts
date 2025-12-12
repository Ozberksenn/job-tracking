import { apiGet, apiPost, apiPut } from "../client";

export const getCompany = async (): Promise<any> => {
    const res = await apiGet("/getCompanyInfo");
    return res.data;
};

export const updateCompanyInfo = async (data: any): Promise<any> => {
    debugger;
    const res = await apiPut("/updateCompanyInfo", data);
    debugger;
    return res.data;
};

