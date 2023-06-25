import React from 'react'
import RoomHeaderBar from '../component/roomHeaderBar/RoomHeaderBar'
import RoomBody from '../component/roomBody/RoomBody'
import ReviewBody from '../component/reviewBody/ReviewBody'
import HotelInfor from '../component/hotelInfor/HotelInfor'
export default function HotelPage() {
  return (
    <div className='pt-28 w-full'>
      <RoomHeaderBar></RoomHeaderBar>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="w-[1100px]">
          <div className="mt-2">
            <HotelInfor></HotelInfor>
          </div>
          <div className="mt-4">
            <RoomBody></RoomBody>
          </div>
          <div className="mt-4">
            <ReviewBody></ReviewBody>
          </div>
        </div>
      </div>
    </div>
  )
}
