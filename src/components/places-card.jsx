import React from 'react'


const PlacesCard = ({ image, name }) => {
    return (
        <div className="bg-[#ffffff] shadow-lg p-4 rounded-lg flex items-center gap-4">
            <img src={image} className='object-cover' alt="istanbul_image" />
            <div className="flex flex-col gap-2">
                <span className="text-lg text-[#586458] font-medium max-sm:text-base">{name}</span>
                <div className="flex items-center gap-2">
                    <span className="text-sm max-sm:text-[13px]">Flights</span>
                    <div className="border border-[#112211]"></div>
                    <span className="text-sm max-sm:text-[13px]">Hotels</span>
                    <div className="border border-[#112211]"></div>
                    <span className="text-sm max-sm:text-[13px]">Resorts</span>
                </div>
            </div>
        </div>
    )
}

export default PlacesCard