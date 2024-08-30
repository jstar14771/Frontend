import React, { useState } from 'react'
import { LtterShow } from './Forms'

function Req({status}) {
    const[showLetter,setLetter]=useState(false)
    
  return (
    <>
    <div onClick={()=>{setLetter((p)=>!p)}}>
         <div className='flex justify-between items-center my-3 py-4 px-3 border-2  rounded-md'>
                <div className='flex flex-col justify-center gap-5 w-[70%]'>
                    <h4 className='font-bold'>Leave</h4>
                    <p className='text-[0.9rem] w-full h-8 text-ellipsis overflow-hidden whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nulla cumque voluptate saepe voluptatum illum magni obcaecati sapiente, dolorum recusandae.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='self-end'>12/01/2020</p>
                    <p className={`text-[0.8rem] flex justify-center items-center gap-1 py-1  rounded-md ${status==="Reject" && ' text-red-700 bg-red-200'} ${status==="Accept" && 'text-green-600 bg-green-200'} ${status==="Pending" && 'text-gray-600 bg-gray-200'}`}><i class={`fa-regular fa-circle-${status==="Accept" && 'check'} ${status==="Reject" && 'fa-circle-xmark'} ${status==="Pending" && 'fa-clock'} text-[0.7rem]`}></i> {status}</p>
                </div>
            </div>
    </div>
    {
      showLetter && <LtterShow Open={setLetter}/>
    }
    </>
  )
}

export default Req