import React from 'react'

const Card = ({ image }) => {
    return (
        <div className="relative rounded-[26px] w-full overflow-hidden">
            <img src={image} className='w-full' alt="" />
            <div className="absolute py-5 flex flex-col items-center justify-center w-full bottom-0 bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1))]">
                <h1 className="text-[#ffffff] text-3xl font-medium">Flights</h1>
                <p className="text-[#ffffff] font-light my-4 text-sm w-[60%] text-center max-sm:my-2">Search Flights & Places Hire to our most popular destinations</p>
                <button className="bg-[#8dd3bb] flex items-center justify-center h-[40px] px-4 gap-2 mt-4 rounded-md">
                    <i className="fa-solid fa-paper-plane"></i>
                    <span className="text-sm font-medium">Show Flights</span>
                </button>
            </div>
        </div>
    )
}

export default Card