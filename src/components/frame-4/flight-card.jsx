import React from 'react'

const FlightCard = ({ image }) => {
  return (
    <div>
      <img src={image} className='object-cover w-full h-full' alt="" />
    </div>
  )
}

export default FlightCard