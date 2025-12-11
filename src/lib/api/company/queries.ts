import { useQuery } from "@tanstack/react-query"
import { getCompany } from "./services"
import { CompanyType } from "./types"

export const useCompany = () => {
    return useQuery<CompanyType[], any, CompanyType>({
        queryKey:["company"],
        queryFn: getCompany,
         select: (data:CompanyType[]) => data[0], 
    })
}