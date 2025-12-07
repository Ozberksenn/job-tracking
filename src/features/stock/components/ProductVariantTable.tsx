"use client";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { TurkishLira } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VariantForm } from "../form/VariantForm";

interface DataTableProps<TData, TValue> {
    data: TData[];
    loading?: boolean;
}

export function ProductVariantTable<TData, TValue>({
    data,
    loading,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });

    if (loading === true) {
        return <div>Loading...</div>;
    }

    return (
        <div className="overflow-hidden rounded-md border p-2  max-h-[89vh] flex flex-col">
            <div className="flex justify-between items-center py-4 gap-4">
                <Input
                    placeholder="Filter Name..."
                    value={(table.getColumn("VariantName")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("VariantName")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <VariantForm component={<Button variant="secondary">New Variant</Button>} />
            </div>
            {/* SCROLL BURADA */}
            <div className="flex-1 overflow-auto">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center h-24">
                                    No data.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}



export const columns: ColumnDef<any>[] = [
    {
        accessorKey: "VariantName",
        header: "Variant Name",
    },
    {
        accessorKey: "Price",
        header: "Price",
        cell: ({ row }) => {
            return (
                <div className="flex gap-2 ">
                    <TurkishLira size={16} style={{ color: "green" }} />
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
    //   {
    //     id: "actions",
    //     cell: ({ row }) => {
    //       return (
    //         <div className="flex gap-6 justify-end">
    //           <ProductVariant component={<NotebookTabs size={16} className="cursor-pointer" style={{ color: "gray" }} />} />
    //           <ProductForm param={row.original} />
    //           <ProductDelete param={row.original} />
    //         </div>
    //       )
    //     }
    //   },
];
