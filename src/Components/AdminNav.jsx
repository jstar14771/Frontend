import React from 'react'
import logo from "../Assests/Logo_W.png"
import { Link, useLocation } from 'react-router-dom'
function AdminNav() {
    const location=useLocation()
  return (
    <>
    <div className=' h-screen fixed w-64 bg-[var(--body)] flex items-center flex-col'>
        <div className='w-24 h-24 mt-12'>
            <img src={logo} alt="" className='w-full h-full object-cover' />
        </div>
        <div className=' flex flex-col w-full mt-10'>
            <Link to="/admin" className={` py-5 px-7 text-white text-xl  font-bold ${location.pathname==="/admin" && 'bg-[var(--btn2)] text-white text-xl font-bold'} hover:bg-[var(--btn2)] hover:text-xl hover:text-white hover:font-bold`}>Dashboard</Link>
            <Link to="/admin/employees" className={` py-5 px-7 text-white text-xl font-bold ${location.pathname.startsWith("/admin/employees") && 'bg-[var(--btn2)] text-white text-xl font-bold'} hover:bg-[var(--btn2)] hover:text-xl hover:text-white hover:font-bold`}>Employees</Link>
        </div>
    </div>
    
    </>
  )
}

export default AdminNav