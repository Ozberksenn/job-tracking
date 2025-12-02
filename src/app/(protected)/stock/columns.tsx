"use client";

import { ProductType } from "@/lib/api/stock/types";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "Image",
    header: "Image",
  },
  {
    accessorKey: "ProductName",
    header: "ProductName",
  },
  {
    accessorKey: "Price",
    header: "Price",
  },
  {
    accessorKey: "Quantity",
    header: "Quantity",
  },
  {
    accessorKey: "Barcode",
    header: "Barcode",
  },
  {
    id:"actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-5 justify-end">
          <Pencil size={16} style={{color:"white"}} className="cursor-pointer"/>
          <Trash size={16} style={{color:"red"}}  className="cursor-pointer"/>
        </div>
      )
    }
  },
];
