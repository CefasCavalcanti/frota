import { ReactNode } from 'react'

function InputRoot({
  label,
  id,
  children
}: {
  label: string
  id: string
  children: ReactNode
}) {
  return (
    <div className="md:ml-2">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      {children}
    </div>
  )
}
export default InputRoot
