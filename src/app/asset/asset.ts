export interface GetAssetOutputDto {
  id: string
  name: string
  license_plate: string
  prefix: string
  order: number
  model: string
  manufacturing_date: string
  is_active: boolean
}

export const assets = [
  {
    id: '1',
    name: 'Carro 1',
    license_plate: 'ABC-1234',
    prefix: 'XYZ',
    order: 1001,
    model: 'Sedan',
    manufacturing_date: '2022-01-15',
    is_active: true
  },
  {
    id: '2',
    name: 'Carro 2',
    license_plate: 'DEF-4564',
    prefix: 'ABC',
    order: 1002,
    model: 'SUV',
    manufacturing_date: '2021-11-30',
    is_active: false
  },
  {
    id: '3',
    name: 'Carro 3',
    license_plate: 'GHI-7894',
    prefix: 'LMN',
    order: 1003,
    model: 'Hatchback',
    manufacturing_date: '2022-03-05',
    is_active: true
  }
]
