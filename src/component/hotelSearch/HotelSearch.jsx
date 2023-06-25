import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsChevronDown, BsPeople } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Datepicker from "react-tailwindcss-datepicker";

export default function HotelSearch() {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.reducerSearchHotel.search)
  const value = useSelector(state => state.reducerSearchHotel.date)
  const people = useSelector(state => state.reducerSearchHotel.people)
  const handleKeydown = (event) => {
    dispatch({ type: 'SEARCH', payload: event.target.value })
  }
  const refSearch = useRef(null);

  const [showPeople, setShowPeole] = useState(false)

  const handleValueChange = (newValue) => {
    dispatch({ type: 'DATE', payload: newValue })
  }

  const handleClick = () => {
    refSearch.current.focus();
  };

  const handleClickSearch = () => {
    if (searchValue.length > 0)
      navigate(`/hotel?search=${searchValue}&people=${people.adult}&datein=${value.startDate}&dateout=${value.endDate}`)
  }
  return (
    <div className='w-[1000px] px-12 pt-8 pb-12 bg-[#f8f7f9] rounded-lg shadow-mine relative'>
      <div className="h-8"></div>
      <div className="p-2 bg-white rounded-lg flex justify-between items-center border-[1px] border-gray-300 cursor-pointer" onClick={() => handleClick()}>
        <div className="flex justify-center items-center p-2">
          <AiOutlineSearch className='text-[24px]'></AiOutlineSearch>
        </div>
        <input ref={refSearch} className='flex-1 outline-none' type="text" placeholder='Enter a destination or property' onKeyDown={handleKeydown} />
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[48%]">
          <Datepicker
            inputClassName={"w-full border-[1px] border-gray-300 caret-transparent p-4 outline-none rounded-md focus:ring-0 font-normal bg-white dark:bg-white dark:placeholder:text-black"}
            containerClassName=""
            primaryColor={"blue"}
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>
        <div className="w-[48%] bg-white rounded-md border-[1px] border-gray-300 caret-transparent flex cursor-pointer relative">
          <div className="flex justify-between w-full p-4" onClick={() => setShowPeole(!showPeople)}>
            <div className="flex items-center justify-center"><BsPeople className='text-[20px]'></BsPeople></div>
            <div className="flex-1 ml-2">{`${people.adult} Adults, ${people.children} Children`}</div>
            <div className="flex items-center justify-center"><BsChevronDown className='text-[20px]'></BsChevronDown></div>
          </div>
          {showPeople && <div className="absolute bg-white p-4 left-0 top-[110%] z-20 min-w-[300px] rounded-md border-[1px] border-gray-300">
            <div className="flex justify-between">
              <div className="">
                <p>Adult</p>
                <p className='text-[12px] text-[#6b7388]'>Ages 18 or above</p>
              </div>
              <div className="flex justify-center items-center">
                <AiOutlineMinusCircle className='text-[20px]' onClick={() => { if (people.adult > 1) dispatch({ type: 'PEOPLE', payload: { adult: people.adult - 1, children: people.children } }) }}></AiOutlineMinusCircle>
                <p className='m-2 text-[18px]'>{people.adult}</p>
                <AiOutlinePlusCircle className='text-[20px]' onClick={() => dispatch({ type: 'PEOPLE', payload: { adult: people.adult + 1, children: people.children } })}></AiOutlinePlusCircle>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <div className="">
                  <p>Childrent</p>
                  <p className='text-[12px] text-[#6b7388]'>Ages 0-17</p>
                </div>
                <div className="flex justify-center items-center">
                  <AiOutlineMinusCircle className='text-[20px]' onClick={() => { if (people.children > 0) dispatch({ type: 'PEOPLE', payload: { adult: people.adult, children: people.children - 1 } }) }}></AiOutlineMinusCircle>
                  <p className='m-2 text-[18px]'>{people.children}</p>
                  <AiOutlinePlusCircle className='text-[20px]' onClick={() => dispatch({ type: 'PEOPLE', payload: { adult: people.adult, children: people.children + 1 } })}></AiOutlinePlusCircle>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
      <div className="absolute top-full left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-mine cursor-pointer caret-transparent p-3 flex justify-center items-center w-[380px] h-[56px] rounded-lg bg-[#5392f9] text-white font-bold text-lg"
        onClick={handleClickSearch}>SEARCH</div>
    </div >
  )
}
