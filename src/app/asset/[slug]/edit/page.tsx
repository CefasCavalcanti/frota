import React from 'react'
import UpdateAssetForm from '../../components/UpdateAssetForm'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col  w-full">
      <div className="text-5xl shadow-md m-4  p-8">
        {' '}
        Asset edit: {params.slug}
      </div>
      <UpdateAssetForm id={params.slug} />
    </div>
  )
}
