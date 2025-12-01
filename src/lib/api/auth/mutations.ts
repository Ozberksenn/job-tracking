"use client";

import { useMutation } from "@tanstack/react-query";
import { login } from "./services";
import { LoginType } from "./types";
import { useRouter } from "next/navigation";

export default function useLoginUser() {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: LoginType) => login(data),
        mutationKey: ['loginUser'],
        onSuccess: (data) => {
            router.push("/stock");
            debugger;
            console.log("User created:", data);
        },
        onError: (error) => {
            console.error("Error:", error);
        },
    });
}