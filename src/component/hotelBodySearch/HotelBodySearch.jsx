import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


export default function HotelBodySearch() {
  const navigate = useNavigate()

  const searchValue = useSelector(state => state.reducerSearchHotel.search)
  const date = useSelector(state => state.reducerSearchHotel.date)
  const people = useSelector(state => state.reducerSearchHotel.people)
  const sort = useSelector(state => state.reducerSearchHotel.sort)
  const price = useSelector(state => state.reducerSearchHotel.price)
  const rating = useSelector(state => state.reducerSearchHotel.rating)

  const [data, setData] = useState(null)

  const callApi = async () => {
    const res = await axios.get('http://localhost:3000/api/v1/hotels')
      .then((res) => {
        setData(res.data.data.hotels)
        console.log(res.data.data.hotels);
      })
  }
  useEffect(() => {
    callApi()
  }, [sort])
  return (
    <div className=''>
      <div className="">
        {data?.map((item, id) =>
          <div id='id' className="w-full border-[1px] border-gray-300 bg-[#ebf0fc] mt-4 rounded-lg flex overflow-hidden cursor-pointer" onClick={() => navigate(`/hotel/${id}`)}>
            <img src={item.img[0]} alt="" className='w-[30%]' />
            <div className="p-2 w-[45%]">
              <p className='font-bold text-[20px]'>{item.name}</p>
              <p className="text-[12px] text-blue-700 mt-2">{item.address}</p>
              <div className="flex mt-2">
                {new Array(item.starRating).fill().map((el, id) => <AiFillStar className='mr-1 text-yellow-500'></AiFillStar>)}
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        )}
      </div>
    </div >
  )
}
