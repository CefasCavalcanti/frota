'use client'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Asset, assetSchema } from '../schema'
import { AssetFormFields } from './form_fields'

const CreateAssetForm = () => {
  const methods = useForm<Asset>({
    resolver: zodResolver(assetSchema)
  })

  const onSubmit: SubmitHandler<Asset> = (data) => console.log(data)
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

export default CreateAssetForm
