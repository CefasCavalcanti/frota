import React from 'react'
import AssetForm from '../../components/AssetForm'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col  w-full">
      <div className="text-5xl shadow-md m-4  p-8">
        {' '}
        Asset edit: {params.slug}
      </div>
      <AssetForm id={params.slug} />
    </div>
  )
}
