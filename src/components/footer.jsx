import { Frame5Logo, Frame5Newsletter } from '@/utils/assets'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#8dd3bb] relative px-4 mt-[10rem] py-10 max-sm:py-7 max-sm:px-2">
            <div className='flex flex-col max-w-[1500px] w-full mx-auto'>
                <div className="flex justify-between pb-10 border-b border-[#112211] max-sm:pb-5">
                    <div className="flex flex-col justify-between w-1/2 max-md:w-full max-md:items-center max-sm:w-full">
                        <h1 className="text-5xl font-bold w-[50%] max-md:w-full max-md:text-center max-md:mb-2 max-md:text-3xl max-sm:text-2xl">Subscribe Newsletter</h1>
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <h1 className="text-xl font-medium mb-2 max-sm:text-lg">The Travel</h1>
                            <p className='max-md:text-center max-md:text-sm max-sm:w-[90%]'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>

                            <div className="flex w-auto mt-3 gap-4 max-sm:gap-1">
                                <input type="text" className="h-[50px] w-full px-4 rounded-md outline-none max-sm:h-[40px] max-sm:text-[13px] max-sm:px-2 max-sm:flex-0" placeholder="Your email address" />
                                <button className="h-[50px] bg-[#112211] max-w-[150px] w-full text-[#ffffff] rounded-md max-sm:h-[40px] max-sm:text-[13px] max-sm:w-[130px]">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <img className="h-[250px] object-cover max-md:hidden" src={Frame5Newsletter} alt="" />
                </div>

                <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 max-sm:grid-cols-2">
                    <div className="flex flex-col max-sm:col-span-2 max-sm:items-center max-sm:justify-center">
                        <div className="h-[40px] relative w-[120px]">
                            <img className="w-full h-full absolute -top-0 left-0" src={Frame5Logo} alt="" />
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <i className="fa-brands text-xl fa-facebook"></i>
                            <i className="fa-brands text-xl fa-twitter"></i>
                            <i className="fa-brands text-xl fa-youtube"></i>
                            <i className="fa-brands text-xl fa-square-instagram"></i>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold max-sm:text-lg">Out Destinations</h1>
                        <div className="flex flex-col gap-3 mt-2">
                            <a href="#" className='text-sm'>Canada</a>
                            <a href="#" className='text-sm'>Alaska</a>
                            <a href="#" className='text-sm'>France</a>
                            <a href="#" className='text-sm'>Finland</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold max-sm:text-lg">Our Activities</h1>
                        <div className="flex flex-col gap-3 mt-2">
                            <a href="#" className='text-sm'>Northern Lights</a>
                            <a href="#" className='text-sm'>Cruising & Sailing</a>
                            <a href="#" className='text-sm'>Multi-activities</a>
                            <a href="#" className='text-sm'>Kayaing</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold max-sm:text-lg">Travel Blogs</h1>
                        <div className="flex flex-col gap-3 mt-2">
                            <a href="#" className='text-sm'>Bali Travel Guide</a>
                            <a href="#" className='text-sm'>Sri Lanka Travel Guide</a>
                            <a href="#" className='text-sm'>Peru Travel Guide</a>
                            <a href="#" className='text-sm'>Malaysia Travel Guide</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold max-sm:text-lg">About Us</h1>
                        <div className="flex flex-col gap-3 mt-2">
                            <a href="#" className='text-sm'>Our Story</a>
                            <a href="#" className='text-sm'>Work with us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer