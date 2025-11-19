"use client";

import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAllMenu } from "@/api/stock/queries";
import { MenuType } from "@/api/stock/types";
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

const StockPage = () => {
  const { data, isLoading, isError } = useAllMenu();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !data) {
    return <div>Error loading data.</div>;
  }
  // const data = await getData();
  return (
    <div className="flex w-full h-full p-2 gap-1">
      <div className="w-[15vw] h-[calc(100vh-84px)] overflow-y-auto p-1 gap-1 flex flex-col scrollbar-none">
        {data?.map((menu: MenuType) => (
          <div  key={menu.MenuId} className="p-3 hover:cursor-pointer hover:bg-muted bg-primary/10 ">
            <span className="text-sm">{menu.Name}</span> 
          </div>
        ))}
      </div>
      <Card className="flex-1 ">
      </Card>
    </div>
    // <Tabs defaultValue="job" className="container mx-auto">
    //   <div className="flex flex-row justify-between pb-3 items-center">
    //     <TabsList
    //       className="
    //     max-w-full 
    //     overflow-x-auto 
    //     whitespace-nowrap 
    //     flex-nowrap 
    //     scrollbar-hide
    //   "
    //     >
    //       {data.map((menu: MenuType) => (
    //         <TabsTrigger
    //           key={menu.MenuId}
    //           value={menu.MenuId.toString()}
    //           className="flex-shrink-0"
    //         >
    //           {menu.Name}
    //         </TabsTrigger>
    //       ))}
    //     </TabsList>

    //     <Button variant="default">Oluştur</Button>
    //   </div>

    //   <TabsContent value="1">asdasd</TabsContent>
    //   <TabsContent value="2"></TabsContent>
    //   <TabsContent value="3"></TabsContent>
    // </Tabs>

  );
};

export default StockPage;
