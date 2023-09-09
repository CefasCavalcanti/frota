'use client'
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/app/counter/counterSlice'
import assetReducer, { assetsApiSlice } from '@/app/asset/assetSlice'
import { apiSlice } from './api_slice'
// import { apiSlice } from './api_slice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    asset: assetReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [assetsApiSlice.reducerPath]: assetsApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
