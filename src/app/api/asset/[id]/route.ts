import { NextResponse } from 'next/server'
import { assets } from '../asset_mock'
let assetLIst = assets
export type AssetOutputDot = {
  id: string
  license_plate: string
  prefix: string
  order: string
  model: string
  is_active: boolean
}
export const getAsset = (id: string, data?: AssetOutputDot) => {
  assetLIst = data
    ? (() => {
        return assetLIst.map((asset) => (asset.id == data.id ? data : asset))
      })()
    : assetLIst

  const index = assetLIst.findIndex((asset) => asset.id === id)
  const item = assetLIst[index]
  return item
}

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  return NextResponse.json({
    data: getAsset(id),
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const res = await request.json()
  getAsset(id, res)

  return NextResponse.json(true)
}

export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const asset = getAsset(id)
  console.log(`${asset.prefix} ${asset.order} deletada`)

  return NextResponse.json(true)
}
