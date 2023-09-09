import { NextResponse } from 'next/server'

export async function GET() {
  const assets = [
    {
      id: '1',
      name: 'Carro 1',
      license_plate: 'ABC-123',
      prefix: 'XYZ',
      order: 1001,
      model: 'Sedan',
      manufacturing_date: '2022-01-15',
      is_active: true
    },
    {
      id: '2',
      name: 'Carro 2',
      license_plate: 'DEF-456',
      prefix: 'ABC',
      order: 1002,
      model: 'SUV',
      manufacturing_date: '2021-11-30',
      is_active: true
    },
    {
      id: '3',
      name: 'Carro 3',
      license_plate: 'GHI-789',
      prefix: 'LMN',
      order: 1003,
      model: 'Hatchback',
      manufacturing_date: '2022-03-05',
      is_active: true
    }
  ]

  function timeout() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }
  async function sleep() {
    await timeout()
  }
  await sleep()
  return NextResponse.json({
    data: assets,
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
