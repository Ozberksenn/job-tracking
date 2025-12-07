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
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Ellipsis, EllipsisVertical, Pencil, Trash } from "lucide-react";
import { ProductForm } from "../../../features/stock/form/ProductForm";
import { MenuForm } from "../../../features/stock/form/MenuForm";
import { MenuType } from "@/lib/api/stock/types";
import { MenuDelete } from "../../../features/stock/components/MenuDelete";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading?: boolean;
  menu: MenuType | null;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading,
  menu
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
     <div className="overflow-hidden rounded-md border p-2  max-h-[89vh] flex flex-col">
    {menu && (
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <MenuForm param={menu} component={<Pencil className="size-4 cursor-pointer" style={{ color: "gray" }} />} />
          <span className="text-lg">{menu?.Name.toUpperCase()}</span>
        </div>
        <MenuDelete param={menu} />
      </div>
    )}

    <div className="flex items-center py-4 gap-4">
      <Input
        placeholder="Filter Name..."
        value={(table.getColumn("ProductName")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("ProductName")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Filter List <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <ProductForm component={<Button variant="outline">New Product</Button>} />
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
