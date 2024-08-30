import React from 'react'

function PayData(props) {
  return (
   <>
   <tr className={`h-20 ${props.num%2==0 && 'bg-slate-300'}`} >
            <td className='text-center text-xl'>{props.num}</td>
            <td className='text-center text-xl'>{props.month}</td>
            <td className=''>
              <div className=' flex justify-center gap-4'>
                <button className=' border-2 border-[var(--btn2)] py-3 rounded-md bg-white hover:text-white hover:bg-[var(--btn2)] w-32'>Download <i class="fa-solid fa-cloud-arrow-down"></i></button>
                <button className='border-[1px] border-[var(--btn2)] py-3 rounded-md bg-[var(--btn2)] hover:bg-white hover:border-2 hover:border-[var(--btn2)] hover:text-[var(--btn2)] w-32 text-white'>View <i class="fa-solid fa-eye"></i></button>
              </div>
            </td>
    </tr>
   </>
  )
}

export default PayData