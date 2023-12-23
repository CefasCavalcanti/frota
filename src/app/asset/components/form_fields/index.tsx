'use client'
import { Input } from '@/app/components/inputs'
import { Asset } from '../../schema'
import { useFormContext, useWatch } from 'react-hook-form'

export const AssetFormFields = {
  Model: ModelInput,
  LicensePlate: LicensePlateInput,
  order: OrderInput,
  IsActive: IsActiveInput,
  Prefix: PrefixInput
  //   ManufacturingDate: ManufacturingDateInput
}

function ModelInput() {
  const {
    register,
    formState: { errors }
  } = useFormContext<Asset>()
  return (
    <Input.Root id="model" label="Vehicle model">
      <Input.Field
        type="text"
        id="model"
        label="Vehicle model"
        register={register('model')}
      />
      <Input.error error={errors.model?.message} />
    </Input.Root>
  )
}

function OrderInput() {
  const {
    register,
    formState: { errors }
  } = useFormContext<Asset>()
  return (
    <Input.Root id="order" label="Vehicle order">
      <Input.Field
        type="text"
        id="order"
        label="Vehicle order"
        register={register('order')}
      />
      <Input.error error={errors.order?.message} />
    </Input.Root>
  )
}

function PrefixInput() {
  const {
    register,
    formState: { errors }
  } = useFormContext<Asset>()
  return (
    <Input.Root id="prefix" label="Vehicle prefix">
      <Input.Field
        type="text"
        id="prefix"
        label="Vehicle prefix"
        register={register('prefix')}
      />
      <Input.error error={errors.prefix?.message} />
    </Input.Root>
  )
}

function IsActiveInput() {
  const {
    register,
    formState: { errors }
  } = useFormContext<Asset>()
  const isActive = useWatch({ name: 'is_active' })
  return (
    <Input.Root id="is_active" label="Is Active">
      <Input.Switch
        id="is_active"
        register={register('is_active')}
        isActive={isActive}
      />
      <Input.error error={errors.is_active?.message} />
    </Input.Root>
  )
}

// function ManufacturingDateInput() {
//   const {
//     register,
//     formState: { errors }
//   } = useFormContext<Asset>()
//   return (
//     <Input.Root id="manufacturing_date" label="Manufacturing date">
//       <Input.Field
//         id="model"
//         label="Vehicle model"
//         register={register('manufacturing_date')}
//       />
//       <Input.error error={errors.manufacturing_date?.message} />
//     </Input.Root>
//   )
// }

function LicensePlateInput() {
  const {
    register,
    formState: { errors }
  } = useFormContext<Asset>()

  const configResister = register('license_plate', {
    onChange: (e) => {
      const value = e.target.value
      const maskedValue: string = value
        .replace(/\W/g, '')
        .slice(0, 7)
        .replace(/(\w{3})(\w{4})/, '$1-$2')
      e.target.value = maskedValue.toUpperCase()
    }
  })
  return (
    <Input.Root id="license_plate" label="License plate">
      <Input.Field
        type="text"
        id="license_plate"
        label="License plate"
        register={configResister}
      />
      <Input.error error={errors.license_plate?.message} />
    </Input.Root>
  )
}
