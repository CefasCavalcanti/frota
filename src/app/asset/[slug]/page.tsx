import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex items-center justify-center">
      Asset by slug: {params.slug}
    </div>
  )
}
