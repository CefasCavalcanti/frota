import React from 'react'
import CreateAssetForm from '../../components/AssetForm'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex items-center justify-center">
      <p className=" text-2xl">Asset edit: {params.slug}</p>
      <CreateAssetForm />
    </div>
  )
}
