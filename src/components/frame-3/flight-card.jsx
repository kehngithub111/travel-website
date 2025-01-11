import React from 'react'

const FlightCard = ({ data }) => {
    return (
        <div className='rounded-[16px] relative'>
            <img src={data.image} className='w-full' alt="" />

            <div className='absolute bottom-0 left-0 p-6 gap-4 flex flex-col w-full max-sm:p-3'>
                <div className='flex justify-between items-end'>
                    <div className='flex flex-col'>
                        <span className='text-2xl text-[#ffffff] font-medium max-sm:text-lg'>{data.title}</span>
                        <span className='text-gray-300 font-light text-sm max-sm:text-[12px]'>{data.subTitle}</span>
                    </div>

                    <div className=''>
                        <span className='text-[#ffffff] text-3xl font-bold max-sm:text-base max-sm:font-medium'>${data.price}</span>
                    </div>
                </div>

                <button className='bg-[#8dd3bb] h-[40px] rounded-lg duration-300 group max-sm:h-[35px]'>
                    <span className='font-medium text-sm max-sm:text-[13px]'>Book Flight</span>
                </button>
            </div>
        </div>
    )
}

export default FlightCard