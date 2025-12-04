"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useAllMenu, useProductByMenuId } from "@/lib/api/stock/queries";
import { MenuType } from "@/lib/api/stock/types";
import { Card } from "@/components/ui/card";
import { useState } from "react";


const StockPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType | null>(null);

  const queryMenu = useAllMenu();
  const queryProduct = useProductByMenuId(selectedMenu?.MenuId ?? null);

  const handleMenuClick = (menu: MenuType) => {
    setSelectedMenu(menu);
  }
  if (queryMenu.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-full h-full p-2 gap-1">
      <div className="w-[15vw] h-[calc(100vh-84px)] overflow-y-auto p-1 gap-1 flex flex-col scrollbar-none">
        {queryMenu.data?.map((menu: MenuType) => (
          <div
            key={menu.MenuId}
            className={`p-3 hover:cursor-pointer hover:bg-muted bg-primary/10  ${selectedMenu?.MenuId === menu.MenuId ? "border-2 border-solid border-white" : "border-2 border-solid"}`}
            onClick={() => handleMenuClick(menu)}
          >
            <span className="text-sm">{menu.Name}</span>
          </div>
        ))}
      </div>
      <Card className="flex-1 border-none p-2 ">
        <DataTable columns={columns} data={queryProduct.data ?? []} loading={queryProduct.isLoading} title={selectedMenu?.Name ?? ''} />
      </Card>
    </div>
  );
};

export default StockPage;
