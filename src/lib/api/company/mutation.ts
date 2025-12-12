"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CompanyType, SocialMedia } from "./types";
import { updateCompanyInfo } from "./services";

export default function useUpdateCompany() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: any) => updateCompanyInfo(data),
        mutationKey: ['updateCompany'],
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['company'] })
            console.log("update company:", data);
        },
        onError: (error) => {
            console.error("Error:", error);
            throw error;
        },
    });
}