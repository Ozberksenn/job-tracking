"use client";

import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    selectedMenu : string
}

const initialState: UserState = {
    selectedMenu : "Dashboard"
}

const userSlice = createSlice({
    name  : "user",
    initialState,
    reducers : {
        increment : (state) => {
            state.selectedMenu = "Seçili Menü";
        }
    }
})


export const {increment} = userSlice.actions
export default userSlice.reducer;