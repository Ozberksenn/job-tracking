"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// export default function useUpdateCompany() {
//     const router = useRouter();
//     return useMutation({
//         mutationFn: async (data: LoginType) => login(data),
//         mutationKey: [''],
//         onSuccess: (data) => {
//             router.push("/stock");
//             console.log("User created:", data);
//         },
//         onError: (error) => {
//             console.error("Error:", error);
//         },
//     });
// }