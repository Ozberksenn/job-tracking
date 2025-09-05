// npm install @reduxjs/toolkit react-redux
// npm install --save-dev @types/react-redux
"use client";

import { configureStore } from '@reduxjs/toolkit'
import mainReducer from "../features/main/mainSlice"

export const store = configureStore({
   reducer: {
    main : mainReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch