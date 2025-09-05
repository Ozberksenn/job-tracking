// npm install @reduxjs/toolkit react-redux
// npm install --save-dev @types/react-redux
"use client";

import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"

export const store = configureStore({
   reducer: {
    users: userReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch