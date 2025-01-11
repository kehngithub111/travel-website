import React from 'react'
import { useLocation } from 'react-router-dom';

const BannerForm = () => {
  const location = useLocation();
  const currentHome = location.pathname === "/";

  return (
    <div className={`${currentHome ? 'max-[768px]:top-[55vh]' : 'max-[768px]:top-[43vh]'} bg-[#ffffff] max-w-[1500px] w-[99%] absolute top-[630px] left-1/2 transform -translate-x-1/2 p-4 rounded-xl shadow-lg max-sm:px-0 max-sm:py-3`}>
      <header className='flex items-center'>
        <button className='flex items-center gap-2 border-r px-6 py-3'>
          <i className="fa-solid fa-plane text-xl max-sm:text-sm"></i>
          <span className='max-sm:text-[13px]'>Flights</span>
        </button>
        <button className='flex items-center gap-2 px-6 py-3'>
          <i className="fa-solid fa-bed-front text-xl max-sm:text-sm"></i>
          <span className='max-sm:text-[13px]'>Stays</span>
        </button>
      </header>

      <div className='px-4 py-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 max-sm:grid-cols-1'>
        <div className='border border-[#112211] rounded-md relative h-[50px] mt-3 max-sm:h-[45px]'>
          <label htmlFor="fromTo" className='absolute left-2 -top-[11px] px-1.5 text-sm bg-[#ffffff] max-sm:text-[13px]'>From - To</label>
          <input type="text" className='h-full w-full rounded-md outline-none pl-2 pr-[30px]' />
          <i className="fa-sharp fa-solid fa-arrow-right-arrow-left absolute top-1/2 transform right-3 -translate-y-1/2"></i>
        </div>
        <div className='border border-[#112211] rounded-md relative h-[50px] mt-3 max-sm:h-[45px]'>
          <label htmlFor="fromTo" className='absolute left-2 -top-[11px] px-1.5 text-sm bg-[#ffffff] max-sm:text-[13px]'>Trip</label>
          <input type="text" className='h-full w-full rounded-md outline-none pl-2 pr-[30px]' />
          <i className="fa-solid fa-chevron-down absolute top-1/2 transform right-3 -translate-y-1/2"></i>
        </div>
        <div className='border border-[#112211] rounded-md relative h-[50px] mt-3 max-sm:h-[45px]'>
          <label htmlFor="fromTo" className='absolute left-2 -top-[11px] px-1.5 text-sm bg-[#ffffff] max-sm:text-[13px]'>Depart - Return</label>
          <input type="text" className='h-full w-full rounded-md outline-none pl-2 pr-[30px]' />
        </div>
        <div className='border border-[#112211] rounded-md relative h-[50px] mt-3 max-sm:h-[45px]'>
          <label htmlFor="fromTo" className='absolute left-2 -top-[11px] px-1.5 text-sm bg-[#ffffff] max-sm:text-[13px]'>Passenger - Class</label>
          <input type="text" className='h-full w-full rounded-md outline-none pl-2 pr-[30px]' />
        </div>
      </div>

      <div className='flex items-center justify-end max-sm:px-4'>
        <button className='px-4 flex gap-2 items-center max-sm:gap-1.5 max-sm:px-2.5'>
          <i className='fa-solid fa-plus max-sm:text-sm'></i>
          <span className='text-sm max-sm:text-[12px]'>Add Promo Code</span>
        </button>
        <button className='bg-[#8dd3bb] h-[40px] px-4 rounded-lg flex gap-2 items-center max-sm:gap-1.5 max-sm:px-2.5'>
          <i className="fa-solid fa-paper-plane max-sm:text-sm"></i>
          <span className='text-sm max-sm:text-[12px]'>Show Flights</span>
        </button>
      </div>
    </div>
  )
}

export default BannerForm