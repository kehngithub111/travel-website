import { LogoBlack } from '@/utils/assets'
import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <div className='flex h-screen justify-between'>
                <div className='w-1/2 p-[4rem] flex items-center justify-center relative max-[768px]:w-full max-sm:px-[1rem] max-sm:py-[1.5rem]'>
                    <form className='max-w-[500px] w-full mx-auto h-full'>
                        <NavLink to="/" >
                            <img className='mb-[5rem] object-cover max-sm:mb-[2rem]' src={LogoBlack} alt="" />
                        </NavLink>

                        <div className='flex flex-col gap-4 max-sm:gap-1'>
                            <h1 className='text-4xl font-medium max-sm:text-2xl'>Login</h1>
                            <p className='text-sm text-gray-500'>Login to access your Golobe account.</p>
                        </div>

                        <div className='space-y-5 mt-[2rem] mb-5'>
                            <div className='border border-gray-500 rounded-md relative h-[50px] mt-3 max-sm:h-[45px]'>
                                <label htmlFor="fromTo" className='absolute left-2 -top-[11px] px-1.5 text-sm bg-[#ffffff] max-sm:text-[13px] text-gray-500'>Email</label>
                                <input type="text" className='h-full w-full rounded-md outline-none pl-3 pr-[30px]' />
                            </div>
                            <div className='border border-gray-500 rounded-md relative h-[50px] mt-3 max-sm:h-[45px]'>
                                <label htmlFor="fromTo" className='absolute left-2 -top-[11px] px-1.5 text-sm bg-[#ffffff] max-sm:text-[13px] text-gray-500'>Password</label>
                                <input type="password" className='h-full w-full rounded-md outline-none pl-3 pr-[30px]' />
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className='text-sm'>Remember me</label>
                            </div>

                            <NavLink to="/forgot-password" className='text-red-500 text-sm'>
                                Forgot Password
                            </NavLink>
                        </div>

                        <button type="submit" className='flex items-center mt-[2rem] justify-center rounded-md w-full h-[40px] bg-[#8dd3bb]'>
                            <span className='text-sm font-medium'>Login</span>
                        </button>

                        <div className='flex items-center gap-2 justify-center my-[1rem]'>
                            <p className='text-sm'>Don't have an account?</p>
                            <NavLink to="/register" className="text-red-500 text-sm">Sign Up</NavLink>
                        </div>

                        <div className='flex items-center gap-2 my-[2rem]'>
                            <div className='border-b flex-1'></div>
                            <span className='text-sm text-gray-400'>Or login with</span>
                            <div className='border-b flex-1'></div>
                        </div>

                        <div className='mt-[1rem] flex gap-1'>
                            <button className='border border-[#8dd3bb] w-full flex items-center justify-center h-[45px] rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                                    <path d="m17.543 13.398.661-4.31h-4.136V6.29c0-1.18.578-2.329 2.43-2.329h1.88V.291S16.673 0 15.042 0c-3.407 0-5.633 2.064-5.633 5.802v3.285H5.622v4.311h3.786v10.42a15.015 15.015 0 0 0 4.66 0v-10.42h3.475Z" fill="#1877F2" />
                                </svg>
                            </button>
                            <button className='border border-[#8dd3bb] w-full flex items-center justify-center h-[45px] rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                                    <path d="M24 12.276c0-.816-.067-1.636-.211-2.438H12.242v4.62h6.612a5.549 5.549 0 0 1-2.447 3.647v2.998h3.945C22.669 19.013 24 15.927 24 12.276Z" fill="#4285F4" />
                                    <path d="M12.241 24c3.302 0 6.086-1.063 8.115-2.897l-3.945-2.998c-1.097.732-2.514 1.146-4.165 1.146-3.194 0-5.902-2.112-6.873-4.951H1.302v3.09C3.38 21.444 7.612 24 12.242 24Z" fill="#34A853" />
                                    <path d="M5.369 14.3a7.053 7.053 0 0 1 0-4.595v-3.09H1.302a11.798 11.798 0 0 0 0 10.776L5.369 14.3Z" fill="#FBBC04" />
                                    <path d="M12.241 4.75a6.727 6.727 0 0 1 4.696 1.798l3.495-3.425A11.898 11.898 0 0 0 12.243 0C7.611 0 3.38 2.558 1.301 6.615l4.067 3.09C6.336 6.862 9.048 4.75 12.24 4.75Z" fill="#EA4335" />
                                </svg>
                            </button>
                            <button className='border border-[#8dd3bb] w-full flex items-center justify-center h-[45px] rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                                    <path d="M21.792 18.703c-.363.839-.793 1.61-1.29 2.32-.679.968-1.234 1.637-1.662 2.009-.664.61-1.375.923-2.137.94-.546 0-1.206-.155-1.973-.47-.77-.314-1.478-.47-2.124-.47-.679 0-1.407.156-2.185.47-.78.315-1.407.48-1.888.496-.73.031-1.458-.29-2.184-.966-.464-.404-1.044-1.098-1.739-2.08-.745-1.049-1.358-2.265-1.838-3.652C2.258 15.803 2 14.352 2 12.948c0-1.608.348-2.995 1.044-4.158A6.122 6.122 0 0 1 5.23 6.58a5.88 5.88 0 0 1 2.955-.835c.58 0 1.34.18 2.285.532.943.354 1.548.533 1.813.533.199 0 .871-.21 2.01-.628 1.078-.388 1.988-.548 2.733-.485 2.02.163 3.536.96 4.545 2.393-1.806 1.094-2.699 2.627-2.681 4.593.016 1.531.572 2.806 1.663 3.817.495.47 1.048.833 1.663 1.09-.134.387-.274.758-.424 1.113ZM17.161.48c0 1.2-.439 2.321-1.313 3.358-1.054 1.234-2.33 1.946-3.714 1.834a3.742 3.742 0 0 1-.027-.455c0-1.152.501-2.386 1.392-3.394.445-.51 1.01-.935 1.696-1.273.685-.334 1.332-.518 1.94-.55.019.16.026.32.026.48Z" fill="#555" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div className='h-full p-[4rem] w-1/2 max-[768px]:hidden'>
                    <img className='h-full rounded-3xl w-full object-cover' src="https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </>
    )
}

export default LoginPage