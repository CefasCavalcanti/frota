import { NextResponse } from 'next/server'
import { assets } from './asset_mock'

export async function GET() {
  return NextResponse.json({
    data: assets,
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function POST(request: Request) {
  const res = await request.json()
  console.log(res)
  return NextResponse.json(true)
}
