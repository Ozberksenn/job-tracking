import { useQuery } from "@tanstack/react-query"
import { getCompany } from "./services"

export const useCompany = () => {
    useQuery({
        queryKey:["company"],
        queryFn: getCompany,
    })
}