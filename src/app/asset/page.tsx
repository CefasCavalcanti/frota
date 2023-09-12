import React from 'react'
import { AssetDataGrid } from './components/AssetDataGrid'
import { CreateAssetButton } from './components/button/CreateAssetButton'

export default function Page() {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex justify-between  shadow-md mb-4 p-6">
        <p className="text-5xl"> Asset list</p>
        <CreateAssetButton />
      </div>
      <AssetDataGrid />
    </div>
  )
}
