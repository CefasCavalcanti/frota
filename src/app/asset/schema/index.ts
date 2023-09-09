import * as z from 'Zod'
export const assetSchema = z.object({
  id: z.string().readonly().nullable().default('no id'),
  order: z.string().max(4).min(1),
  license_plate: z
    .string()
    .regex(
      /^[A-Za-z0-9]{3}-[A-Za-z0-9]{4}$/,
      'the license plate is incomplete'
    ),
  prefix: z.string({}).min(2),
  model: z.string().min(2),
  // manufacturing_date: z.string(),
  is_active: z.boolean()
})
export type Asset = z.infer<typeof assetSchema>

export const vehicleModelMasck = () => {}
