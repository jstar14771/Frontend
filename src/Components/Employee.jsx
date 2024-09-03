import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import EmpDetails from './Employee/EmpDetails'
import EmpOffer from './Employee/EmpOffer'
import EmpPaySlips from './Employee/EmpPaySlips'
import EmpReq from './Employee/EmpReq'

function Employee() {
    const{id}=useParams()
    const navigate=useNavigate()
    const[detailsOpen,setDetails]=useState(false)
    const[OfferOpen,setOffer]=useState(false)
    const[TimesheetOpen,setTime]=useState(false)
    const[PayslipsOpen,setPay]=useState(false)
    const[RequestOpen,setRequest]=useState(false)

    const deleteEmp=async(id)=>{
        await axios.delete(`http://localhost:3001/api/deleteEmployee/${id}`).then((res)=>{
            toast.success(res.data.message)
        })
        navigate("/admin/employees",{replace:true})
    }
  return (
    <>
       <div className='pb-10 h-screen overflow-y-auto'>
       <div className=' h-14 flex justify-end pr-16 items-center text-xl sticky top-0 bg-white'>
          <h1 className='font-bold'>Deadpool({id})</h1>
        </div>
        <div className=' px-3 mt-8 space-y-3'>
          <div  className={`border-[1px]  px-5 py-5 ${detailsOpen && 'border-[var(--btn2)] border-2'}`} >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${detailsOpen && 'text-[var(--btn2)]'}`} onClick={()=>setDetails((prev)=>!prev)}>Details <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {detailsOpen && <EmpDetails/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${OfferOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${OfferOpen && 'text-[var(--btn2)]'}`} onClick={()=>setOffer((prev)=>!prev)}>Offer Letter <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {OfferOpen && <EmpOffer/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${TimesheetOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${TimesheetOpen && 'text-[var(--btn2)]'}`} onClick={()=>setTime((prev)=>!prev)}>Time Sheets <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {TimesheetOpen && <EmpOffer/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${PayslipsOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${PayslipsOpen && 'text-[var(--btn2)]'}`} onClick={()=>setPay((prev)=>!prev)}>Pay Slips <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {PayslipsOpen && <EmpPaySlips/>}
          </div>
          <div   className={`border-[1px]  px-5 py-5 ${RequestOpen && 'border-[var(--btn2)] border-2'}`}  >
          <h2 className={`text-2xl font-semibold flex justify-between hover:cursor-pointer ${RequestOpen && 'text-[var(--btn2)]'}`} onClick={()=>setRequest((prev)=>!prev)}>Requests <span><i class="fa-solid fa-chevron-down"></i></span></h2>
          {RequestOpen && <EmpReq/>}
          </div>
         
        </div>
        <button onClick={()=>deleteEmp(id)}>Delete</button>
       </div>
    </>

  )
}

export default Employee