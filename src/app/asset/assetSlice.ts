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
    }
  }
})

export const { findAssets } = assetsSlice.actions

export const selectAssets = (state: RootState) => state.asset

export default assetsSlice.reducer
