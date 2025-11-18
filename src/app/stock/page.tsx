"use client";

import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllMenu } from "@/api/stock/queries";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

const StockPage = async () => {
  const { data, isLoading, isError } = useAllMenu();

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // const data = await getData();
  return (
    <Tabs defaultValue="job" className="container mx-auto py-3">
      <div className="flex flex-row justify-between pb-3">
        <TabsList>
          <TabsTrigger value="1">Yemekler</TabsTrigger>
          <TabsTrigger value="2">İçecekler</TabsTrigger>
          <TabsTrigger value="3">Tatlılar</TabsTrigger>
        </TabsList>
        <Button variant="default">Oluştur</Button>
      </div>
      <TabsContent value="1">
        <DataTable columns={columns} data={data} />
      </TabsContent>
      <TabsContent value="2"> </TabsContent>
      <TabsContent value="3"></TabsContent>
    </Tabs>
  );
};

export default StockPage;
