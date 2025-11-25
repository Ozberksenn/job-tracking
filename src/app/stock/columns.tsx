"use client";

import { ProductType } from "@/api/stock/types";
import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "ProductDescription",
    header: "ProductDescription",
  },
  {
    accessorKey: "Price",
    header: "Price",
  },
  {
    accessorKey: "Barcode",
    header: "Barcode",
  },
];
