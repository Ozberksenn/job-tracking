"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllMenu } from "@/api/stock/queries";
import { MenuType, ProductType } from "@/api/stock/types";
import { Card } from "@/components/ui/card";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ];
// }

const mockDataProduct: ProductType[] = [
  {
    ProductId: 1,
    ProductName: "Product 1",
    ProductDescription: "Description for Product 1",
    MenuId: 1,
    Price: 10.99,
    Barcode: "1234567890123",
    quantity: 100,
  },
  {
    ProductId: 2,
    ProductName: "Product 2",
    ProductDescription: "Description for Product 2",
    MenuId: 1,
    Price: 12.99,
    Barcode: "1234567890123",
    quantity: 50,
  },
];

const StockPage = () => {
  const { data, isLoading, isError } = useAllMenu();
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (isError || !data) {
  //   return <div>Error loading data.</div>;
  // }
  // const data = await getData();
  return (
    <div className="flex w-full h-full p-2 gap-1">
      <div className="w-[15vw] h-[calc(100vh-84px)] overflow-y-auto p-1 gap-1 flex flex-col scrollbar-none">
        {data?.map((menu: MenuType) => (
          <div
            key={menu.MenuId}
            className="p-3 hover:cursor-pointer hover:bg-muted bg-primary/10 "
          >
            <span className="text-sm">{menu.Name}</span>
          </div>
        ))}
      </div>
      <Card className="flex-1 border-none p-0 ">
        <DataTable columns={columns} data={mockDataProduct} />
      </Card>
    </div>
  );
};

export default StockPage;
