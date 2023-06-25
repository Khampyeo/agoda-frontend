import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosAdd } from "react-icons/io";

export default function RoomBody() {
  const [rooms, setRooms] = useState(null)
  useEffect(() => {
    const callApi = async () => {
      await axios.get('http://localhost:3000/api/v1/rooms')
        .then(res => setRooms(res.data.data.rooms))
    }
    callApi();
  }, [])
  return (
    <div>
      <h1 className='text-[28px] font-semibold border-b-[2px] pb-2'>Select your room</h1>
      <div className="">
        {rooms?.map((room, id) => <div id={id} className="p-2 border-[1px] border-gray-300 mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] font-semibold">{room.type_room}</h1>
            <div className="flex items-center">
              <div className="mr-2">
                <p className='text-[14px] font-semibold'>Excellent</p>
                <p className="text-[12px] text-[#737373]">Room comfort & quality</p>
              </div>
              <div className="rounded-full border-[2px] w-8 h-8 font-semibold border-blue-500 text-blue-500 text-[13px] flex justify-center items-center ">{room.review.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex bg-[#f7f7f7] p-2 m-[-8px] mt-4">
            <div className="">
              <div className="pb-2 border-gray-300 border-b-2">
                <img width={'260px'} src={room?.img[0]} alt="" />
                <div className="flex">
                  <img width={'130px'} src={room?.img[1]} alt="" />
                  <img width={'130px'} src={room?.img[1]} alt="" />
                </div>
              </div>
              <div className="mt-4">
                <p className='text-[14px]'>Room size: {room.area}m2</p>
                <p className='text-[14px]'>{room.room_facilities[0]}</p>
                <p className='text-[14px]'>{room.room_facilities[4]}</p>
                <p className='text-[14px]'>{room.room_facilities[9]}</p>
                <div className="flex mt-2">
                  <div className="border-blue-500 rounded-full border-2 text-blue-500"><IoIosAdd className='text-[20px]'></IoIosAdd></div>
                  <p className='text-blue-500 ml-2'>See all room facilities</p>
                </div>
              </div>
            </div>
            <div className="ml-2 w-[460px] border-r-2 px-2">
              <p className='font-semibold'>Benefit</p>
              <div className="">
                {room.benefit.map((el, id) => <li id={id} className=''>{el}</li>)}
              </div>
            </div>
            <div className="ml-2 w-[160px] border-r-2 px-2">
              <p className='font-semibold'>Price per night</p>
              <div className="px-2 py-1 bg-red-600 text-white text-[14px] mt-4 inline-block ml-[-16px]">SAVE TODAY!!</div>
              <div className="flex flex-col items-end mt-4">
                <p className='line-through	'>${room.highest_price.toFixed(2)}</p>
                <p className='mt-2 text-red-600 text-[22px] font-semibold'>${room.current_price.toFixed(2)}</p>

              </div>
            </div>
            <div className="ml-2 flex-1 flex items-center flex-col px-2">
              <p className='font-semibold'>Booked</p>
              <div className="px-2 py-2 flex justify-center items-center bg-blue-500 w-[100px] mt-4">
                <button className='text-white'>Book now</button>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}
