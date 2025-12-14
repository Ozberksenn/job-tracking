import { apiGet } from "../client";
import { ReservationType } from "./types";

export const getReservations = async (): Promise<ReservationType[]> => {
    const res = await apiGet("/getReservations");
    return res.data;
};