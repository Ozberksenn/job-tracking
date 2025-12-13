"use client";

import { useMutation } from "@tanstack/react-query";
import { login, updatePassword } from "./services";
import { LoginType, UpdatePasswordType } from "./types";
import { useRouter } from "next/navigation";

export  function useLoginUser() {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: LoginType) => login(data),
        mutationKey: ['loginUser'],
        onSuccess: (data) => {
            router.push("/stock");
            console.log("User created:", data);
        },
        onError: (error) => {
            console.error("Error:", error);
        },
    });
}

export  function useUpdatePassword() {
    return useMutation({
        mutationFn: async (data: UpdatePasswordType) => updatePassword(data),
        mutationKey: ['updatePassord'],
        onSuccess: (data) => {
            console.log("Update password:");
        },
        onError: (error) => {
            console.error("Error:", error);
        },
    });
}