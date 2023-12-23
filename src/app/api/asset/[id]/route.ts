import { NextResponse } from 'next/server'
import { assets } from '../asset_mock'
// const assetLIst = assets

// export const getAsset = (id: string, data?: never) => {
//   // assetLIst = data
//   //   ? (() => {
//   //       return assetLIst.map((asset) => (asset.id == data.id ? data : asset))
//   //     })()
//   //   : assetLIst
//   data
//   const index = assetLIst.findIndex((asset) => asset.id === id)
//   const item = assetLIst[index]
//   return item
// }

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  id
  return NextResponse.json({
    data: assets,
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  id
  const res = await request.json()
  res
  return NextResponse.json(true)
}

export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const index = assets.findIndex((asset) => asset.id === id)
  const asset = assets[index]
  console.log(`${asset.prefix} ${asset.order} deletada`)

  return NextResponse.json(true)
}
