'use client'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../client/store'
import { GetAssetOutputDto, assets } from './asset'

const initialState: GetAssetOutputDto[] = assets
export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    findAssets: () => {
      return []
    },
    updateAsset: (state, action) => {
      const index = state.findIndex((asset) => asset.id === action.payload.id)
      state[index] = action.payload
    },
    createAsset: (state, action) => {
      state.push(action.payload)
    },
    deleteAsset: (state, action) => {
      const index = state.findIndex((asset) => asset.id === action.payload)
      if (index != -1) {
        state.splice(index, 1)
      }
    }
  }
})

export const { findAssets, updateAsset, createAsset, deleteAsset } =
  assetsSlice.actions

export const selectAssets = (state: RootState) => state.asset
export const selectAssetById = (state: RootState, id: string) =>
  state.asset.find((asset) => asset.id === id)

export default assetsSlice.reducer
