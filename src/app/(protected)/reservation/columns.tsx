"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ReservationType } from "@/lib/api/reservation/types";
import { Mail, Phone, ScrollText } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export const columns: ColumnDef<ReservationType>[] = [
    {
        accessorKey: "Status",
        header: "Status",
    },
    {
        accessorKey: "Name",
        header: "Name",
    },
    {
        accessorKey: "GuestCount",
        header: "Count",
        cell: ({ row }) => {
            return (
                <Button className="pl-2 pr-2" variant="default">{row.original.Count}</Button>
            )
        }
    },
    {
        accessorKey: "Date",
        header: "Date",
        cell: ({ row }) => {
            const formatted = format(
                new Date(row.original.Date),
                "dd.MM.yyyy",
                { locale: tr }
            );
            return (
                <span>{formatted}</span>
            )
        }
    },
     {
        accessorKey: "Time",
        header: "Time",
        cell: ({ row }) => {
            const formatted = format(
                new Date(row.original.Date),
                "HH:mm",
                { locale: tr }
            );
            return (
                <span>{formatted}</span>
            )
        }
    },
    {
        accessorKey: "TableName",
        header: "Table",
    },
    {
        accessorKey: "Phone",
        header: "Phone",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start items-center gap-2">
                    <Phone size={16} style={{ color: "green" }} />
                    <span>{row.original.Phone}</span>
                </div>

            )
        }
    },
    {
        accessorKey: "Mail",
        header: "Mail",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start items-center gap-2">
                    <Mail size={16} style={{ color: "blue" }} />
                    <span>{row.original.Mail}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "Note",
        header: "Note",
        cell: ({ row }) => {
            return (
                <ScrollText size={18} />
            )
        }
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         return (
    //             <div className="flex gap-6 justify-end">
    //                 <ProductVariant param={row.original} component={<NotebookTabs size={16} className="cursor-pointer" style={{ color: "gray" }} />} />
    //                 <ProductForm param={row.original} />
    //                 <ProductDelete param={row.original} />
    //             </div>
    //         )
    //     }
    // },
];
