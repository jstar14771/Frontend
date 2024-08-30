import React from 'react'
import PayData from '../Components/PayData'

function Payslips() {
  return (
    <>
      <div className='w-full px-8 py-10'>
        <table className='border w-full'>
          <tr className='border bg-[var(--body)] text-white text-xl h-16'>
            <th className='w-[10%] border'>S.no</th>
            <th className='w-[50%] border'>Month</th>
            <th className='w-[40%] border'>Action</th>
          </tr>
          <PayData num={1} month="Aug 2024"/>
          <PayData num={2} month="Aug 2024"/>
          <PayData num={3} month="Aug 2024"/>
          <PayData num={4} month="Aug 2024"/>
        
        </table>
      </div>
    </>
  )
}

export default Payslips