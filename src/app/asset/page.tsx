import React from 'react'
import { AssetDataGrid } from './components/AssetDataGrid'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl"> Asset list</div>
      <AssetDataGrid />
    </div>
  )
}
