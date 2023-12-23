import React from 'react'
import { AssetDataGrid } from './components/AssetDataGrid'
import { CreateAssetButton } from './components/button/CreateAssetButton'

export default function Page() {
  return (
    <div className="max-w-full flex h-full flex-col">
      <div className="flex justify-between   m-3 p-6 bg-white">
        <p className="text-5xl"> Asset list</p>
        <CreateAssetButton />
      </div>
      <div className="flex justify-between  m-3  bg-white">
        <AssetDataGrid />
      </div>
    </div>
  )
}
