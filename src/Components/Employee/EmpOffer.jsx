import React, { useState } from 'react'
import { DeleteConfirm } from '../Forms'

function EmpOffer() {
    const[offerLetter,setOffer]=useState(true)
    const[DeleteCon,setDele]=useState(false)
  return (
   <>
   <div className='mt-4'>
    {
        offerLetter ?
        <div className='flex justify-between pr-20'>
        <p>Deadpool Offer Letter</p>
        <div className='flex gap-8 text-xl'>
            <button onClick={()=>setDele((p)=>!p)}><i class="fa-solid fa-trash text-red-500"></i></button>
            <button><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
    </div>
    :
    <div>
    <h2 className='mb-3 font-[500]'>Upload Offer Letter</h2>
    <input type="file" />
    <button className='px-7 py-2 bg-[var(--btn2)] text-white font-semibold'>Upload</button>
    </div>

    }
   {
    DeleteCon && <DeleteConfirm Open={setDele}/>
   }
   </div>
   </>
  )
}

export default EmpOffer