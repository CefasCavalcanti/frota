'use client'
import { useAppSelector } from '@/app/client/hooks'
import React from 'react'
import { selectAssets } from '../assetSlice'
export const AssetList = () => {
  const assets = useAppSelector(selectAssets)
  return (
    <div>
      {assets.map((asset) => (
        <div key={asset.id} className="text-black">
          {asset.name}
        </div>
      ))}
    </div>
  )
}
