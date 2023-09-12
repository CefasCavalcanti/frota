'use client'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../client/store'
import { FindAssetOutputDto } from './asset'
import { apiSlice } from '../client/api_slice'
import { assets } from '../api/asset/asset_mock'
import { Asset } from './schema'
const endpointUrl = 'asset'
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
function createAssetMutation(asset: Asset) {
  return { url: endpointUrl, method: 'POST', body: asset }
}
function updateAssetMutation(asset: Asset) {
  return {
    url: `${endpointUrl}/${asset.id}`,
    method: 'PUT',
    body: asset
  }
}
function deleteAssetMutation({ id }: { id: string }) {
  return {
    url: `${endpointUrl}/${id}`,
    method: 'DELETE'
  }
}
function getAssets({ page = 1, perPage = 10, search = '' }) {
  const params = { page, perPage, search, isActive: true }

  return `${endpointUrl}?${parseQueryParams(params)}`
}
export const assetsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    allAssets: query<{ data: FindAssetOutputDto[] }, AssetParams>({
      query: getAssets,
      providesTags: ['Assets']
    }),
    findAssets: query<{ data: FindAssetOutputDto }, { id: string }>({
      query: ({ id }) => `asset/${id}`
    }),
    createAsset: mutation<boolean, Asset>({
      query: createAssetMutation,
      invalidatesTags: ['Assets']
    }),
    updateAsset: mutation<boolean, Asset>({
      query: updateAssetMutation,
      invalidatesTags: ['Assets']
    }),
    deleteAsset: mutation<boolean, { id: string }>({
      query: deleteAssetMutation,
      invalidatesTags: ['Assets']
    })
  })
})

export const {
  useAllAssetsQuery,
  useFindAssetsQuery,
  useCreateAssetMutation,
  useUpdateAssetMutation,
  useDeleteAssetMutation
} = assetsApiSlice

// state local
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
