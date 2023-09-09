import React from 'react'
import { AssetDataGrid } from './components/AssetDataGrid'
import { CreateAssetButton } from './components/button/CreateAssetButton'

export default async function Page() {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex justify-between  shadow-md m-4  p-8">
        <p className="text-5xl"> Asset list</p>
        <CreateAssetButton />
      </div>
      <AssetDataGrid />
    </div>
  )
}
