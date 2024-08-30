import React, { useState } from 'react'
import EmpPayData from './EmpPayData'
import { PaysLipsForm } from '../Forms'

function EmpPaySlips() {
    const[formOpen,setFormOpen]=useState(false)

    const UploadPaySlip=()=>{
        setFormOpen(true)
    }
  return (
    <>
      <div className='mt-4'>
        <div>
            <button onClick={UploadPaySlip} className='text-xl flex items-center border-2 w-36 hover:bg-[var(--btn2)] hover:text-white border-[var(--btn2)]'><i className="fa-solid fa-plus w-12 flex items-center justify-center text-2xl font-bold h-12 "></i> Upload</button>
        </div>
        <div className='mt-3 w-full'>
            <table className='w-full'>
                <tr className='border-2 h-10 bg-[var(--body)] text-white'>
                    <th className='w-[15%] border-r'>S.No</th>
                    <th className='w-[50%] border-r'>Month</th>
                    <th className='w-[45%]'>Actions</th>
                </tr>
                <EmpPayData id={1} month={"Aug 2024"}/>
                <EmpPayData id={1} month={"Aug 2024"}/>
                <EmpPayData id={1} month={"Aug 2024"}/>
            </table>
        </div>
      </div>
        {
            formOpen && <PaysLipsForm Open={setFormOpen}/>
        }
    </>
  )
}

export default EmpPaySlips