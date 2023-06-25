import React, { useRef } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import FilterCheckBox from '../filterCheckBox/FilterCheckBox';
import FilterRadio from '../filterRadio/FilterRadio';
import { useDispatch, useSelector } from 'react-redux';


export default function FilterNavBar() {
  const dispatch = useDispatch();
  const price = useSelector(state => state.reducerSearchHotel.price)
  const handelKeyDownMin = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'PRICE', payload: { min: Number(e.target.value), max: price.max } })
    }
  }
  const handelKeyDownMax = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'PRICE', payload: { min: price.min, max: Number(e.target.value) } })
    }
  }
  return (
    <div className=''>
      <div className="rounded-full border-[2px] border-gray-500 p-2 flex items-center">
        <AiOutlineSearch className='text-2xl mr-2 text-gray-500'></AiOutlineSearch>
        <input type="text" className='outline-none flex-1' placeholder='Text search' />
      </div>
      <div className="mt-4">
        <p className='font-bold'>Your budget (per night)</p>
        <div className="flex items-center mt-10">
          <div className="">
            <div className="border border-black w-[110px] h-8 flex items-center relative">
              <p className='absolute top-[-26px] text-[14px]'>MIN</p>
              <MdAttachMoney className='text-xl'></MdAttachMoney>
              <input type="number" defaultValue={price.min} className='w-full text-right outline-none' onKeyDown={handelKeyDownMin} />
            </div>
          </div>
          <div className="flex-1 border-dashed border border-black"></div>
          <div className="">
            <div className="border border-black w-[110px] h-8 flex items-center relative">
              <p className='absolute top-[-26px] text-[14px]'>MAX</p>
              <MdAttachMoney className='text-xl'></MdAttachMoney>
              <input type="number" defaultValue={price.max} className='w-full text-right outline-none' onKeyDown={handelKeyDownMax} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <FilterCheckBox title='Rating' array={['9+ Exceptional', '8+ Excellent', '7+ Very good', '6+ Good']}></FilterCheckBox>
      </div>
      <div className="mt-4">
        <FilterRadio title='Rating' array={['9+ Exceptional', '8+ Excellent', '7+ Very good', '6+ Good']}></FilterRadio>
      </div>
    </div>
  )
}
