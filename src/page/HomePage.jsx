import React, { useEffect } from 'react'
import FunctionBar from '../component/functionBar/FunctionBar'
import HotelSearch from '../component/hotelSearch/HotelSearch'
import { useSelector } from 'react-redux'
import FlightSearch from '../component/flightSearch/FlightSearch'
import NoneSearch from '../component/noneSearch/NoneSearch'

export default function HomePage() {
  const type = useSelector(state => state.reducerManager.type)

  return (
    <div className='p-32 flex flex-col justify-center items-center'>
      <div className="relative">
        <div className="absolute top-0 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%]">
          <FunctionBar></FunctionBar>
        </div>
        {type === 'hotel' && <HotelSearch></HotelSearch>}
        {type === 'flight' && <FlightSearch></FlightSearch>}
        {type === 'none' && <NoneSearch></NoneSearch>}

      </div>
    </div >
  )
}
