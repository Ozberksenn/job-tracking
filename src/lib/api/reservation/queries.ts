import { useQuery } from "@tanstack/react-query";
import { ReservationType } from "./types";
import { getReservations } from "./services";


export const useGetReservations = () =>
    useQuery<ReservationType[]>({
        queryKey: ['getReservations'],
        queryFn: getReservations,
        
    });

