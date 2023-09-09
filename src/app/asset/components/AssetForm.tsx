'use client'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Asset, assetSchema } from '../schema'
import { AssetFormFields } from './form_fields'
import { useAppDispatch, useAppSelector } from '@/app/client/hooks'
import { createAsset, selectAssetById, updateAsset } from '../assetSlice'
import { useSnackbar } from 'notistack'

const AssetForm = ({ id }: { id?: string }) => {
  let asset = useAppSelector((state) => selectAssetById(state, id ?? ''))
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const methods = useForm<Asset>({
    resolver: zodResolver(assetSchema),
    defaultValues: asset && {
      is_active: asset.is_active,
      license_plate: asset.license_plate,
      model: asset.model,
      order: asset.order.toString(),
      prefix: asset.prefix,
      id: asset.id
    }
  })
  const onSubmit: SubmitHandler<Asset> = async (data) => {
    id! ? dispatch(updateAsset(data)) : dispatch(createAsset(data))
    id!
      ? enqueueSnackbar('Success updating asset', { variant: 'success' })
      : enqueueSnackbar('Success creating asset', { variant: 'success' })
    methods.reset()
    asset = undefined
  }
  return (
    <FormProvider {...methods}>
      <form
        className="px-8 pt-6 pb-8 mb-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="mb-4 md:flex md:justify-between ">
          <AssetFormFields.IsActive />
          <AssetFormFields.Prefix />
          <AssetFormFields.order />
          <AssetFormFields.Model />
          <AssetFormFields.LicensePlate />
        </div>
        <input type="submit" />
      </form>
    </FormProvider>
  )
}

export default AssetForm
