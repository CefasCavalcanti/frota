import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex items-center justify-center">
      <p className=" text-2xl">Asset edit: {params.slug}</p>
    </div>
  )
}
