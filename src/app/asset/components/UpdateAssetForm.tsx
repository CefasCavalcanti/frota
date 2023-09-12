'use client'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Asset, assetSchema } from '../schema'
import { AssetFormFields } from './form_fields'
import { useFindAssetsQuery, useUpdateAssetMutation } from '../assetSlice'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'

const UpdateAssetForm = ({ id }: { id: string }) => {
  const { data, isFetching } = useFindAssetsQuery({
    id: id
  })
  const [isdisabled, setIsdisabled] = useState(false)
  const [updateAsset, UpdateStatus] = useUpdateAssetMutation()
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    if (UpdateStatus.isSuccess) {
      enqueueSnackbar('Asset updated successfully', { variant: 'success' })
      setIsdisabled(false)
    }
    if (UpdateStatus.error) {
      enqueueSnackbar('Asset not updated', { variant: 'error' })
    }
  }, [enqueueSnackbar, UpdateStatus.error, UpdateStatus.isSuccess])

  const methods = useForm<Asset>({
    resolver: zodResolver(assetSchema),
    values: data?.data
  })

  const onSubmit: SubmitHandler<Asset> = (data) => {
    updateAsset(data)

    methods.reset()
  }
  if (isFetching) {
    return <div>Loading...</div>
  }

  return (
    <FormProvider {...methods}>
      <form
        className="px-8 pt-6 pb-8 mb-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 gap-4 ">
          <AssetFormFields.IsActive />
          <AssetFormFields.Prefix />
          <AssetFormFields.order />
          <AssetFormFields.Model />
          <AssetFormFields.LicensePlate />
        </div>
        <input type="submit" disabled={isdisabled} />
      </form>
    </FormProvider>
  )
}

export default UpdateAssetForm
