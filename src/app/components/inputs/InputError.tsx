import React from 'react'

export const InputError = ({ error }: { error?: string }) => {
  return <>{error && <p className="text-red-500 text-sm">{'*' + error}</p>}</>
}
