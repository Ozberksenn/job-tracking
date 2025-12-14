"use client";

import { StatusBar } from "@/features/reservation/StatusBar";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useGetReservations } from "@/lib/api/reservation/queries";

const Reservation = () => {
  const query = useGetReservations()
  return (
    <div className="flex h-full ml-4 mb-4 mr-4 gap-4">
      <StatusBar />
      <div className="flex-1">
        <DataTable columns={columns} data={query.data ?? []} loading={false} />
      </div>
    </div>
  );
};

export default Reservation;
