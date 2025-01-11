import { LogoBlack } from '@/utils/assets'
import React from 'react'
import { NavLink } from 'react-router-dom'

const VerifyPassword = () => {
  return (
    <>
      <div className='flex h-screen justify-between'>
        <div className='w-1/2 p-[4rem] flex items-center justify-center relative max-[768px]:w-full max-sm:px-[1rem]'>
          <form className='max-w-[500px] w-full mx-auto'>
            <NavLink to="/">
              <img className='absolute top-[4rem] left-1/2 transform -translate-x-1/2' src={LogoBlack} alt="" />
            </NavLink>

            <div className='flex flex-col gap-4'>
              <NavLink to="/login" className="flex items-center gap-2">
                <i class="fa-regular fa-chevron-left"></i>
                <span className='text-sm'>Back to login</span>
              </NavLink>
              <h1 className='text-4xl font-medium'>Verify Code</h1>
              <p className='text-sm text-gray-500'>An authentication code has been sent to your email.</p>
            </div>

            <div className='space-y-5 mt-[2rem] mb-5'>
              <div className='border border-gray-500 rounded-md relative h-[50px] mt-3 max-sm:h-[45px]'>
                <label htmlFor="fromTo" className='absolute left-2 -top-[11px] px-1.5 text-sm bg-[#ffffff] max-sm:text-[13px] text-gray-500'>Enter Code</label>
                <input type="text" className='h-full w-full rounded-md outline-none pl-3 pr-[30px]' />
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <p className='text-sm'>Didn't receive a code</p>
              <button className='text-sm text-red-500'>Resend</button>
            </div>

            <button type="submit" className='flex items-center mt-[2rem] justify-center rounded-md w-full h-[40px] bg-[#8dd3bb]'>
              <span className='text-sm font-medium'>Verify</span>
            </button>
          </form>
        </div>

        <div className='h-full p-[4rem] w-1/2 max-[768px]:hidden'>
          <img className='h-full rounded-3xl w-full object-cover' src="https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  )
}

export default VerifyPassword