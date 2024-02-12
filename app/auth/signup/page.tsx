import SingupForm from '@/components/auth/SingupForm'
import React from 'react'

export default function RegisterUser() {
  return (
        <div className='w-full max-w-[30%] m-auto h-screen flex justify-center items-center'>
            <div>
              <div className='text-dark-gray'>
                <h3 className='font-bold text-[26px]'>Olá!</h3>
                <span>Cadastre-se para começar</span>
              </div>
              <div className='mt-[40px]'>
                <SingupForm/>
              </div>
            </div>    
        </div> 
  )
}
