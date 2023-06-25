import React, { } from 'react'

export default function FilterCheckBox({ title, array }) {
  
  return (
    <div className=''>
      <p className='font-bold'>{title}</p>
      <div className="mt-2">
        {array.map((el, id) => <div id={id} className='flex items-center mt-1 cursor-pointer group'>
          <input type="checkbox" className='h-4 w-4 border-red' />
          <p className='text-[#5a5a5b] font-semibold ml-2 group-hover:text-[#5392f9]'>{el}</p>
        </div>)}
      </div>
    </div>
  )
}
