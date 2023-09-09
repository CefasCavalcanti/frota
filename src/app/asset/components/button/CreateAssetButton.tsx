import React from 'react'
import Link from 'next/link'

export const CreateAssetButton = () => {
  return (
    <Link href="asset/create">
      <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform ">
        Criar Novo Ativo
      </div>
    </Link>
  )
}
