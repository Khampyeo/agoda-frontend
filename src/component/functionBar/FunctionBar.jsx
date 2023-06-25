import React, { useState } from 'react'
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { BiFootball } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useDispatch } from 'react-redux';

export default function FunctionBar() {
  const arrayFunction = ['Hotels & Homes', 'Private Stays', 'Flight + Hotel', 'Flights', 'Long Stays', 'Activites']
  const arrayName = ['hotel', 'none', 'none', 'flight', 'none', 'none']
  const arrayIcon = [<FaHotel></FaHotel>, <AiFillHome></AiFillHome>, <MdFlight></MdFlight>, <MdFlight></MdFlight>, <BsCalendarDate></BsCalendarDate>, <BiFootball></BiFootball>]
  const dispatch = useDispatch()
  const [select, setSelect] = useState(0)
  return (
    <div className='px-8 w-[900px] shadow-mine rounded-lg bg-white'>
      <ul className='flex justify-between'>
        {arrayFunction.map((el, id) => <div className={`flex justify-center items-center relative
        ${select !== id && 'after:hidden'} after:absolute after:w-full after:h-1 after:bg-[#5392f9] after:top-full after:left-0 after:translate-y-[-100%]
        `} onClick={() => { setSelect(id); dispatch({ type: 'TYPE', payload: arrayName[id] }) }}>
          {arrayIcon[id]}
          <li className={`py-3 ml-2 cursor-pointer caret-transparent `}
          >{el}</li>
        </div>)}
      </ul>
    </div>
  )
}
