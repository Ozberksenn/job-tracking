"use client";

import { ProductType } from "@/lib/api/stock/types";
import { ColumnDef } from "@tanstack/react-table";
import { BadgeTurkishLira, NotebookTabs, Pencil, Trash, TurkishLira } from "lucide-react";
import { ProductForm } from "./components/ProductForm";
import { ProductDelete } from "./components/ProductDelete";
import { Button } from "@/components/ui/button";


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
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 ">
          <TurkishLira size={16} style={{color:"green"}} />
          {row.original.Price}
        </div>
      )
    }
  },
  {
    accessorKey: "Quantity",
    header: "Quantity",
    cell: ({ row }) => {
      return (
         <Button className="p-2" variant="secondary">{row.original.Quantity}</Button>
      )
    }
  },
  {
    accessorKey: "Barcode",
    header: "Barcode",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-6 justify-end">
          <NotebookTabs size={16} className="cursor-pointer" style={{color:"gray"}} />
          <ProductForm param={row.original} />
          <ProductDelete param={row.original} />
        </div>
      )
    }
  },
];
