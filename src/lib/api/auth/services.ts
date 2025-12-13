import { apiPost } from "../client";
import { LoginType, UpdatePasswordType } from "./types";


export const login = async (data: LoginType): Promise<any> => {
    const res = await apiPost("/login", { "Mail": data.email, "Password": data.password });
    debugger;
    return res.data;
};

export const updatePassword = async (data: UpdatePasswordType): Promise<any> => {
    const userId = localStorage.getItem("id")
    debugger;
    const res = await apiPost("/updatePassword", { "Mail": data.Mail, "Password": data.Password,"NewPassword": data.NewPassword,"UserId":userId  });
    debugger;
    return res.data;
};

