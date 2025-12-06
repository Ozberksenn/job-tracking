"use client";
import { MenuType } from "@/lib/api/stock/types";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface StockState {
    selectedMenu: MenuType | null;
}

const initialState: StockState = {
    selectedMenu: null
}

const stockSlice = createSlice({
    name  : "stock",
    initialState,
    reducers : {
        selectMenu : (state,action:PayloadAction<MenuType | null>) => {
            state.selectedMenu = action.payload
        }
    }
})


export const {selectMenu} = stockSlice.actions
export default stockSlice.reducer;