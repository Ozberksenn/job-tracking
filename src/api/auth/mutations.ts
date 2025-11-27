
import { useMutation } from "@tanstack/react-query";
import { login } from "./services";
import { LoginType } from "./types";

export default function useLoginUser() {
    return useMutation({
        mutationFn: async (data: LoginType) => login(data),
        mutationKey: ['loginUser'],
        onSuccess: (data) => {
            console.log("User created:", data);
        },
        onError: (error) => {
            console.error("Error:", error);
        },
    });
}