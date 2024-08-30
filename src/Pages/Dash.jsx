import React, { useState } from 'react'
import Req from '../Components/Req'
import Holi from '../Components/Holi';

function Dash() {
  const[value,setValue]=useState("Pending");
  return (
    <div className='w-full h-[91vh] overflow-y-auto flex px-5 py-3'>
      <div className="w-[60%] ">
      <div className='border-2 rounded-xl  h-[84vh] overflow-y-auto'>
          <h1 className=' flex items-center justify-center h-24 text-3xl font-[600] sticky top-0 bg-[var(--body)] text-white border-b-2'>Requests History</h1>
           <div className='px-5 py-2'>
              <Req status={value}/>
              <Req status={"Accept"}/>
              <Req status={"Reject"}/>
              <Req status={value}/>
              <Req status={"Reject"}/>
           </div>
            
            
        </div>
       
      </div>
      <div className="w-[40%] pl-5">
        <div className='border-2 px-5 py-2 rounded-md h-36'>
          <h1 className='text-center font-[600] text-3xl py-2 mb-2'>Offer letter</h1>
          <div className='flex justify-center gap-5'>
            <button className=' text-white bg-[var(--body)] w-[150px] h-12 font-[600] rounded-lg hover:bg-[var(--btn2)] '><i className="fa-solid fa-eye"></i> View</button>
            <button className=' text-white bg-[var(--body)] w-[150px] h-12 font-[600] rounded-lg hover:bg-[var(--btn2)] '><i className="fa-solid fa-cloud-arrow-down"></i> Download</button>
          </div>
        </div>
        <Holi/>
      </div>
    </div>
  )
}

export default Dash