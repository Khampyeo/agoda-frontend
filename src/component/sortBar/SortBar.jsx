import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function SortBar() {
  const arrSort = ['BEST MATCH', 'Lowest price first', 'Top reviewed', 'Hot Deals!']
  const dispatch = useDispatch()

  const sort = useSelector(state => state.reducerSearchHotel.sort)
  return (
    <div className='flex border-[1px] border-gray-300 rounded-lg'>
      <div className="p-4">Sort</div>
      <div className="flex flex-1 relative">
        {arrSort.map((el, id) => <div className='flex-1 relative bg-white'>
          <div id={id} className={`flex justify-center h-full items-center cursor-pointer font-semibold ${sort === id ? 'bg-[#5392f9] text-white' : 'bg-white hover:text-[#5392f9]'} `} onClick={() => dispatch({ type: 'SORT', payload: id })}>{el}</div>
          <div className="h-[80%] w-[1px] bg-gray-300 absolute top-1/2 translate-y-[-50%] left-0"></div>
        </div>)}
      </div>
    </div>
  )
}
