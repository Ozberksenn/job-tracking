"use client";

import { configureStore } from '@reduxjs/toolkit'
import mainReducer from "../features/main/mainSlice"
import stockReducer from "../features/stock/stockSlice"

export const store = configureStore({
   reducer: {
    main : mainReducer,
    stock: stockReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch