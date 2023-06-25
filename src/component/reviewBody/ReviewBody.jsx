import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ReviewBody() {
  const [comments, setComments] = useState(null)

  useEffect(() => {
    const callApi = async () => {
      await axios.get(`http://localhost:3000/api/v1/hotels/0/comments`)
        .then(res => setComments(res.data.result.documents))
    }
    callApi();
  }, [])
  return (
    <div className='border-[1px] border-gray-300 rounded-lg px-4 py-8'>
      <h1 className='text-[22px] font-semibold border-b-[2px] pb-2'>Reviews</h1>
      <div className="">
        {comments?.map((comment, id) => <div className="mt-2 flex items-center border-b border-gray-300 pb-8">
          <div className="w-[30%]">
            <h1 className='text-blue-500 text-[28px]'> {comment.value.rating} <span className='text-[16px]'>Exceptional</span></h1>
            <p>{comment.value.name} from {comment.value.country}</p>
            <p>Type Room: {comment.value.typeRoom}</p>
            <p>Stay On: {comment.value.stayOn}</p>
          </div>
          <div className="flex-1 ml-8 bg-[#f5f5f5] px-10 py-5 rounded-lg">
            <h1 className='text-[22px] font-semibold'>{comment.value.title}</h1>
            <div className="">{comment.value.comment}</div>
          </div>
        </div>)}
      </div>
    </div>
  )
}
