import React from 'react'
import CreateAssetForm from '../components/CreateAssetForm'

export default function Page() {
  return (
    <div className="flex flex-col  w-full">
      <div className="text-5xl shadow-md m-4  p-8">Asset create</div>
      <CreateAssetForm />
    </div>
  )
}
