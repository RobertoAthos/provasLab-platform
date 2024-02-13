import React from 'react'
import { FieldError } from 'react-hook-form'

export default function FieldErrorMessage({error}:{error: FieldError | undefined}) {
  return (
    <span className='text-red-500 font-semibold text-[1rem] mt-2'>{error?.message}</span>
  )
}
