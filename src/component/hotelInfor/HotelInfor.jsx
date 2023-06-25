import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";

export default function HotelInfor() {
  const { id } = useParams()
  let [data, setData] = useState(null)
  useEffect(() => {
    const callApi = async () => {
      const res = await axios.get(`http://localhost:3000/api/v1/hotels/${id}`)
        .then(res => setData(res.data.data.hotel))
    }
    callApi()
  }, [])
  return (
    <div>
      {data && <div className="">
        <div className="flex overflow-hidden rounded-lg">
          {data.img.map((el, id) => <img id={id} className='w-[50%]' src={`${el}`} alt="" />
          )}
        </div>
        <div className="flex mt-4">
          <div className="border-[1px] border-gray-300 rounded-lg px-4 py-8 w-[75%]">
            <div className="flex">
              <h1 className="text-[28px] font-bold">{data.name}</h1>
              <span className="flex items-center ml-2">{new Array(data.starRating).fill().map((el, id) => <AiFillStar id={id} className='mr-1 text-yellow-500'></AiFillStar>)}</span>
            </div>
            <div className="border-b-[1px] pb-2 text-[14px]">{data.address}</div>
            <div className="mt-2">{data.description}{data.description}</div>
          </div>
          <div className="border-[1px] border-gray-300 rounded-lg p-4 ml-4 flex-1">
            <h1 className='text-[24px] font-semibold'>{Number.parseFloat(data.review_mean).toFixed(1)} Excellent</h1>
            <p className='text-[14px] text-blue-700 font-semibold'>3390 reviewer</p>
            <div className="mt-2">
              <div className="border-[1px] border-gray-300 rounded-lg py-1 px-2 inline-block mt-2 mr-2 text-[14px]">Housekeeping</div>
              <div className="border-[1px] border-gray-300 rounded-lg py-1 px-2 inline-block mt-2 mr-2 text-[14px]">Breakfast</div>
              <div className="border-[1px] border-gray-300 rounded-lg py-1 px-2 inline-block mt-2 mr-2 text-[14px]">Food & Dining</div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-[1px] border-gray-300 rounded-lg p-4">
          <h1 className='text-[20px] font-bold'>Highlight</h1>
          <div className="mt-2">
            {data.highlight.map((el, id) => <li className='mt-1'>{el}</li>)}
          </div>
        </div>
        <div className="mt-4 border-[1px] border-gray-300 rounded-lg p-4">
          <h1 className="text-[20px] font-bold">Staycation offers available</h1>
          <div className="">Get special benefits for your stay</div>
          <div className="mt-2 flex">
            {Object.keys(data.staycation_offer_available).map((key, index) =>
              <div className='px-3 py-1 bg-[#f8f7f9] rounded-lg mx-2'>
                <p className='font-semibold'>{key}</p>
                <p className='mt-1'>{data.staycation_offer_available[key]}</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 border-[1px] border-gray-300 rounded-lg p-4">
          <h1 className="text-[20px] font-bold">Facilities</h1>
          <div className="grid grid-cols-4">
            {data.facilities.map((el, id) =>
              <div id={id} className='flex items-center'>
                <AiOutlineCheck className='text-blue-400 text-[20px]'></AiOutlineCheck>
                <p className='ml-2 font-semibold text-blue-400'>{el}</p>
              </div>)}
          </div>
        </div>
      </div>}
    </div>
  )
}
