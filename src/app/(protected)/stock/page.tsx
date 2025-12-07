"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useAllMenu, useProductByMenuId } from "@/lib/api/stock/queries";
import { MenuType } from "@/lib/api/stock/types";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { BadgeCheckIcon } from "lucide-react";
import { MenuForm } from "../../../features/stock/form/MenuForm";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
import { selectMenu } from "@/features/stock/stockSlice";


const StockPage = () => {
  const selectedMenu = useAppSelector((state) => state.stock.selectedMenu);
  const dispatch = useAppDispatch();

  const queryMenu = useAllMenu();
  const queryProduct = useProductByMenuId(selectedMenu?.MenuId ?? null);

  const handleMenuClick = (menu: MenuType) => {
    dispatch(selectMenu(menu));
  }

  if (queryMenu.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full h-full p-2 gap-1">
      <div className="w-[15vw] h-[calc(100vh-84px)] overflow-y-auto p-1 gap-1 flex flex-col scrollbar-none">
        <MenuForm component={<Item className="cursor-pointer" variant="outline" size="sm" >
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Add a new menu</ItemTitle>
          </ItemContent>
        </Item>} />
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
        <DataTable columns={columns} data={queryProduct.data ?? []} loading={queryProduct.isLoading} menu={selectedMenu ?? null} />
      </Card>
    </div>
  );
};

export default StockPage;
