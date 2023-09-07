'use client'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/app/counter/counterSlice'
import assetReducer from '@/app/asset/assetSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    asset: assetReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
