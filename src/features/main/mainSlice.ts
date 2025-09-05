"use client";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface MainState {
    menu : string
}

const initialState: MainState = {
    menu : "Dashboard"
}

const mainSlice = createSlice({
    name  : "main",
    initialState,
    reducers : {
        selectMenu : (state,action:PayloadAction<string>) => {
            state.menu = action.payload
        }
    }
})


export const {selectMenu} = mainSlice.actions
export default mainSlice.reducer;