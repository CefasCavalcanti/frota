'use client'

import { UseFormRegisterReturn } from 'react-hook-form'

function ToggleSwitch<TFieldName extends string = string>({
  register,
  id,
  isActive
}: {
  id: string
  isActive: boolean
  register: UseFormRegisterReturn<TFieldName>
}) {
  return (
    <label className="flex items-center cursor-pointer w-32">
      <div className="relative">
        <input id={id} {...register} type="checkbox" className="hidden" />
        <div
          className={`toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner ${
            isActive ? 'bg-green-500' : 'bg-gray-300'
          }`}
        />
        <div
          className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
            isActive
              ? 'transform translate-x-full bg-green-500'
              : 'transform translate-x-0 bg-gray-300'
          }`}
        />
      </div>
      <div
        className={`ml-3 text-gray-700 ${
          isActive ? 'text-green-500' : 'text-gray-400'
        }`}
      >
        {isActive ? 'YES' : 'NO'}
      </div>
    </label>
  )
}

export default ToggleSwitch
