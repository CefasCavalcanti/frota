'use client'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Asset, assetSchema } from '../schema'
import { AssetFormFields } from './form_fields'
import { useCreateAssetMutation } from '../assetSlice'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'

const CreateAssetForm = () => {
  const [isdisabled, setIsdisabled] = useState(false)
  const [createAsset, createstatus] = useCreateAssetMutation()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (createstatus.isSuccess) {
      enqueueSnackbar('Asset updated successfully', { variant: 'success' })
      setIsdisabled(false)
    }
    if (createstatus.error) {
      enqueueSnackbar('Asset not updated', { variant: 'error' })
    }
  }, [enqueueSnackbar, createstatus.error, createstatus.isSuccess])
  const methods = useForm<Asset>({
    resolver: zodResolver(assetSchema)
  })

  const onSubmit: SubmitHandler<Asset> = (data) => {
    createAsset(data)
    methods.reset()
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
        <input type="submit" disabled={isdisabled} />
      </form>
    </FormProvider>
  )
}

export default CreateAssetForm
