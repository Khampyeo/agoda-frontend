import React, { useRef, useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsChevronDown, BsPeople } from "react-icons/bs";
import { MdFlight } from "react-icons/md";
import { LuLocateFixed } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";

import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from 'react-router-dom';
export default function FlightSearch() {
  const navigate = useNavigate()
  const [desValue, setDesValue] = useState('')
  const handleKeydownDes = (event) => {
    setDesValue(event.target.value)
  }
  const [startValue, setStartValue] = useState('')
  const handleKeydownStart = (event) => {
    setStartValue(event.target.value)
  }
  const refDes = useRef(null);
  const refStart = useRef(null);
  const [value, setValue] = useState({
    startDate: (new Date(Date.now()).toLocaleString('sv')).split(' ')[0],
    endDate: (new Date(Date.now()).toLocaleString('sv')).split(' ')[0]
  });
  const [numPeople, setNumPeople] = useState(1)
  const typeFlightArray = ['Economy', 'Premium economy', 'Business', 'First']
  const [typeFlight, setTypeFlight] = useState(0)
  const [oneWay, setOneWay] = useState(true)
  const [adult, setAdult] = useState(1)
  const [childrent, setChildrent] = useState(0)
  const [showPeople, setShowPeole] = useState(false)
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }
  const handleClickSearch = () => {
    if (oneWay === true) setValue([value.startDate, value.endDate = ''])
    if (desValue.length > 0 && startValue.length > 0)
      navigate(`/flight?start=${startValue}&des=${desValue}&people=${numPeople}&datein=${value.startDate}&dateout=${value.endDate}`)
  }
  return (
    <div className='w-[1000px] px-12 pt-8 pb-12 bg-[#f8f7f9] rounded-lg shadow-mine relative'>
      <div className="flex py-4">
        <div className={`py-2 px-4 bg-white rounded-full   cursor-pointer ${oneWay ? 'border-[#5392f9] border-[3px]' : 'border-gray-300 border-[1px]'}`} onClick={() => { if (!oneWay) setOneWay(!oneWay) }}>One-Way</div>
        <div className={`py-2 px-4 bg-white rounded-full ml-4  cursor-pointer ${!oneWay ? 'border-[#5392f9] border-[3px]' : 'border-gray-300 border-[1px]'}`} onClick={() => { if (oneWay) setOneWay(!oneWay) }}>Round-trip</div>
      </div>
      <div className="flex justify-between relative">
        <div className="w-[49%] p-2 bg-white rounded-lg flex justify-between items-center border-[1px] border-gray-300 cursor-pointer" onClick={() => refStart.current.focus()}>
          <div className="flex justify-center items-center p-2">
            <MdFlight className='text-[24px]'></MdFlight>
          </div>
          <input ref={refStart} className='flex-1 outline-none' type="text" placeholder='Fly from' onKeyDown={handleKeydownStart} />
        </div>
        <div className="w-[49%] p-2 bg-white rounded-lg flex justify-between items-center border-[1px] border-gray-300 cursor-pointer" onClick={() => refDes.current.focus()}>
          <div className="flex justify-center items-center p-2">
            <LuLocateFixed className='text-[24px]'></LuLocateFixed>
          </div>
          <input ref={refDes} className='flex-1 outline-none' type="text" placeholder='Fly to' onKeyDown={handleKeydownDes} />
        </div>
        <div className="absolute bg-white p-2 rounded-md left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] shadow-mine cursor-pointer hover:bg-gray-100 transition-all">
          <GrTransaction className='text-[16px] '></GrTransaction>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[49%]">
          <Datepicker
            inputClassName={"w-full border-[1px] border-gray-300 caret-transparent p-4 outline-none rounded-md focus:ring-0 font-normal bg-white dark:bg-white dark:placeholder:text-black"}
            containerClassName=""
            asSingle={oneWay ? true : false}
            primaryColor={"blue"}
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>
        <div className="w-[49%] bg-white rounded-md border-[1px] border-gray-300 caret-transparent flex cursor-pointer relative">
          <div className="flex justify-between w-full p-4" onClick={() => setShowPeole(!showPeople)}>
            <div className="flex items-center justify-center"><BsPeople className='text-[20px]'></BsPeople></div>
            <div className="flex-1 ml-2">{`${adult} Adults, ${childrent} Childrents, ${typeFlightArray[typeFlight]}`}</div>
            <div className="flex items-center justify-center"><BsChevronDown className='text-[20px]'></BsChevronDown></div>
          </div>
          {showPeople && <div className="absolute bg-white p-4 left-0 top-[110%] z-20 min-w-[300px] rounded-md border-[1px] border-gray-300 cursor-default">
            <div className="flex justify-between">
              <div className="">
                <p>Adult</p>
                <p className='text-[12px] text-[#6b7388]'>Ages 18 or above</p>
              </div>
              <div className="flex justify-center items-center">
                <AiOutlineMinusCircle className='text-[20px] cursor-pointer' onClick={() => { if (adult > 1) setAdult(adult - 1) }}></AiOutlineMinusCircle>
                <p className='m-2 text-[18px]'>{adult}</p>
                <AiOutlinePlusCircle className='text-[20px] cursor-pointer' onClick={() => setAdult(adult + 1)}></AiOutlinePlusCircle>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <div className="">
                  <p>Childrent</p>
                  <p className='text-[12px] text-[#6b7388]'>Ages 0-17</p>
                </div>
                <div className="flex justify-center items-center">
                  <AiOutlineMinusCircle className='text-[20px] cursor-pointer' onClick={() => { if (childrent > 0) setChildrent(childrent - 1) }}></AiOutlineMinusCircle>
                  <p className='m-2 text-[18px]'>{childrent}</p>
                  <AiOutlinePlusCircle className='text-[20px] cursor-pointer' onClick={() => setChildrent(childrent + 1)}></AiOutlinePlusCircle>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4 gap-2">
                {typeFlightArray.map((el, id) => <div className={`${typeFlight === id && 'bg-[#5392f9] text-white'} border-[1px] border-[#5392f9] rounded-md px-2 py-1 cursor-pointer`} onClick={() => setTypeFlight(id)}>{el}</div>)}

              </div>
            </div>
          </div>}
        </div>
      </div>
      <div className="absolute top-full left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-mine cursor-pointer caret-transparent p-3 flex justify-center items-center w-[380px] h-[56px] rounded-lg bg-[#5392f9] text-white font-bold text-lg"
        onClick={handleClickSearch}>SEARCH FLIGHTS</div>
    </div>
  )
}
