import BannerForm from '@/components/banner-form'
import { FlightF3Image1, FlightF3Image2, FlightF3Image3, FlightF3Image4, FlightMap } from '@/utils/assets'
import { FlightF2Card, FlightF3Card } from '@/utils/components'
import flightF2CardData from '@/utils/flightcard'
import React from 'react'


const Flights = () => {

  return (
    <>
      <div className='mt-[4rem] min-h-[80vh] relative flex items-center justify-center' id='banner2Image'>
        <div className='max-w-[1500px] w-full mx-auto px-2 max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
          <div className=''>
            <h1 className='text-[#ffffff] text-6xl font-bold text-shadow mb-4 leading-[70px] max-[768px]:text-4xl max-[768px]:text-center'>Make your travel wishlist, <br /> we'll do the rest</h1>
            <p className='text-[#ffffff] text-xl font-light text-shadow max-[768px]:text-sm max-[768px]:text-center'>special offers to suit your plan</p>
          </div>
          <div></div>
        </div>
        <BannerForm />
      </div>

      <div className='mt-[17rem] mb-[2rem] px-2 max-[639px]:mt-[23rem]'>
        <div className='max-w-[1500px] w-full mx-auto'>
          <header className="flex items-center justify-between py-[1rem] max-sm:py-4">
            <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:w-full">
              <h1 className="text-4xl font-medium max-sm:text-xl">Let's go places together</h1>
              <p className="font-light max-sm:text-[13px]">Discover the latest offers and news and start planning your trip with us.</p>
            </div>

            <button className="border border-[#8dd3bb] h-[40px] px-4 rounded-lg max-sm:hidden">
              <span className="text-sm text-[#8dd3bb] max-sm:text-[13px]">See All</span>
            </button>
          </header>
        </div>
        <div className='max-sm:h-[200px]'>
          <img src={FlightMap} className='w-full h-full object-cover' alt="flightmap" />
        </div>
      </div>

      <div className='max-w-[1500px] w-full mx-auto px-1.5 max-sm:mt-[7rem]'>
        <header className="flex items-center justify-between py-[1rem] max-sm:py-0">
          <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:w-full">
            <h1 className="text-4xl font-medium max-sm:text-xl">Let's go places together</h1>
            <p className="font-light max-sm:text-[13px]">Discover the latest offers and news and start planning your trip with us.</p>
          </div>

          <button className="border border-[#8dd3bb] h-[40px] px-4 rounded-lg max-sm:h-[35px] max-sm:hidden">
            <span className="text-sm text-[#8dd3bb] max-sm:text-[13px]">See All</span>
          </button>
        </header>

        <div className='grid grid-cols-4 my-4 gap-4 max-sm:gap-1.5 max-sm:grid-cols-1'>
          {flightF2CardData.map((item, index) => (
            <FlightF2Card key={index} data={item} />
          ))}
        </div>

        <button className="border border-[#8dd3bb] hidden h-[40px] px-4 rounded-lg max-sm:h-[35px] max-sm:block max-sm:w-full">
          <span className="text-sm text-[#8dd3bb] max-sm:text-[13px]">See All</span>
        </button>
      </div>

      <div className='mt-[10rem] px-1.5'>
        <div className='max-w-[1500px] w-full mx-auto'>
          <header className="flex items-center justify-between py-[1rem] max-sm:py-0 ">
            <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:w-full">
              <h1 className="text-4xl font-medium max-sm:text-xl">Fall into travel</h1>
              <p className="font-light max-sm:text-[13px]">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
            </div>

            <button className="border border-[#8dd3bb] h-[40px] px-4 rounded-lg max-sm:hidden">
              <span className="text-sm text-[#8dd3bb] max-sm:text-[13px]">See All</span>
            </button>
          </header>

          <div className='grid grid-cols-4 my-4 gap-4 max-sm:grid-cols-2 max-sm:gap-2'>
            <div className='bg-[#8dd3bb] gap-10 rounded-[16px] col-span-2 row-span-2 p-6 flex justify-between flex-col max-sm:p-3'>
              <div className='flex flex-col'>
                <div className='flex items-start justify-between mb-4 max-sm:mb-3'>
                  <h1 className='text-4xl font-bold max-sm:text-xl'>Backpacking <br /> Sri Lanka</h1>
                  <div className='flex flex-col items-center bg-[#ffffff] rounded-lg px-6 py-3 max-sm:px-4 max-sm:py-2'>
                    <span className='text-sm max-sm:text-[13px]'>From</span>
                    <span className='text-lg font-extrabold max-sm:text-base'>$700</span>
                  </div>
                </div>
                <p className='text-[13px]'>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
              </div>
              <button className='bg-[#ffffff] rounded-lg h-[40px] max-sm:h-[35px]'>
                <span className='text-sm font-medium max-sm:text-[13px]'>Book Flight</span>
              </button>
            </div>
            <FlightF3Card image={FlightF3Image1} />
            <FlightF3Card image={FlightF3Image2} />
            <FlightF3Card image={FlightF3Image3} />
            <FlightF3Card image={FlightF3Image4} />
          </div>

          <button className="border border-[#8dd3bb] hidden h-[40px] px-4 rounded-lg max-sm:h-[35px] max-sm:block max-sm:w-full">
            <span className="text-sm text-[#8dd3bb] max-sm:text-[13px]">See All</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Flights