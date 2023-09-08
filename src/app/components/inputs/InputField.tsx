import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export function TextInputField<TFieldName extends string = string>({
  register,
  id,
  label,
  type
}: {
  type: HTMLInputTypeAttribute
  label: string
  id: string
  register: UseFormRegisterReturn<TFieldName>
}) {
  return (
    <input
      type={type}
      {...register}
      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
      id={id}
      placeholder={label}
    />
  )
}
