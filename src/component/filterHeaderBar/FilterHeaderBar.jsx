import React, { useEffect, useRef, useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import { AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsChevronDown, BsPeople } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function FilterHeaderBar() {
  const dispatch = useDispatch()
  const searchState = useSelector(state => state.reducerSearchHotel.search)
  const value = useSelector(state => state.reducerSearchHotel.date)
  const peopleState = useSelector(state => state.reducerSearchHotel.people)

  const [searchValue, setSearhValue] = useState(searchState)
  const [dateValue, setDateValue] = useState(value)
  const [people, setPeople] = useState(peopleState)

  const handleKeydown = (event) => {
    setSearhValue(event.target.value)
  }
  const refSearch = useRef(null);


  const [showPeople, setShowPeole] = useState(false)


  const handleValueChange = (newValue) => {
    setDateValue(newValue)
  }

  const handleClickSearch = () => {
    dispatch({ type: 'SEARCH', payload: searchValue })
    dispatch({ type: 'DATE', payload: dateValue })
    dispatch({ type: 'PEOPLE', payload: people })
  }
  return (
    <div className='w-full bg-[#20274d] h-[70px] flex justify-center items-center py-[11px]'>
      <div className="w-[400px] mr-2">
        <div className="p-1 bg-white rounded-lg flex justify-between items-center border-[1px] border-gray-300 cursor-pointer">
          <div className="flex justify-center items-center p-2">
            <AiOutlineSearch className='text-[24px]'></AiOutlineSearch>
          </div>
          <input ref={refSearch} className='flex-1 outline-none' type="text" defaultValue={searchValue} placeholder='Enter a destination or property' onKeyDown={handleKeydown} />
        </div>
      </div>
      <div className="mr-2">
        <div className="w-[340px]">
          <Datepicker
            inputClassName={"w-full border-[1px] border-gray-300 caret-transparent p-3 outline-none rounded-md focus:ring-0 font-normal bg-white dark:bg-white dark:placeholder:text-black"}
            containerClassName=""
            primaryColor={"blue"}
            value={dateValue}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>
      </div>
      <div className="mr-2">
        <div className="w-[260px] bg-white rounded-md border-[1px] border-gray-300 caret-transparent flex cursor-pointer relative">
          <div className="flex justify-between w-full p-3" onClick={() => setShowPeole(!showPeople)}>
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
                <AiOutlineMinusCircle className='text-[20px]' onClick={() => { if (people.adult > 1) setPeople({ adult: people.adult - 1, children: people.children }) }}></AiOutlineMinusCircle>
                <p className='m-2 text-[18px]'>{people.adult}</p>
                <AiOutlinePlusCircle className='text-[20px]' onClick={() => setPeople({ adult: people.adult + 1, children: people.children })}></AiOutlinePlusCircle>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <div className="">
                  <p>Childrent</p>
                  <p className='text-[12px] text-[#6b7388]'>Ages 0-17</p>
                </div>
                <div className="flex justify-center items-center">
                  <AiOutlineMinusCircle className='text-[20px]' onClick={() => { if (people.children > 0) setPeople({ adult: people.adult, children: people.children - 1 }) }}></AiOutlineMinusCircle>
                  <p className='m-2 text-[18px]'>{people.children}</p>
                  <AiOutlinePlusCircle className='text-[20px]' onClick={() => setPeople({ adult: people.adult, children: people.children + 1 })}></AiOutlinePlusCircle>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
      <div className="">
        <button className='flex justify-center items-center w-[100px] bg-[#5392f9] text-white rounded-md  caret-transparent cursor-pointer p-3' onClick={handleClickSearch}>Search</button>
      </div>
    </div>
  )
}
