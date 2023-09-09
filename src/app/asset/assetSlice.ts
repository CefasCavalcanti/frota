'use client'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../client/store'
import { FindAssetOutputDto, assets } from './asset'
import { apiSlice } from '../client/api_slice'
const endpointUrl = '/asset'
export interface AssetParams {
  page?: number
  perPage?: number
  search?: string
  isActive?: boolean
}
function parseQueryParams(params: AssetParams) {
  const query = new URLSearchParams()

  if (params.page) {
    query.append('page', params.page.toString())
  }

  if (params.perPage) {
    query.append('per_page', params.perPage.toString())
  }

  if (params.search) {
    query.append('search', params.search)
  }

  if (params.isActive) {
    query.append('is_active', params.isActive.toString())
  }

  return query.toString()
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAssets({ page = 1, perPage = 10, search = '' }) {
  const params = { page, perPage, search, isActive: true }

  return `${endpointUrl}?${parseQueryParams(params)}`
}
export const assetsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    allAssets: query<{ data: FindAssetOutputDto[] }, AssetParams>({
      query: () => 'asset',
      providesTags: ['Assets']
    })
  })
})

export const { useAllAssetsQuery } = assetsApiSlice

const initialState: FindAssetOutputDto[] = assets
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
