import React, { useState } from 'react'
import { DeleteConfirm, PaysLipsForm } from '../Forms'

function EmpPayData(props) {
  const[DeleteCon,setDele]=useState(false)
  const[EditCon,setEdit]=useState(false)
  return (
    <>
        <tr className='text-center h-10'>
            <td>{props.id}</td>
            <td>{props.month}</td>
            <td>
            <div className='flex gap-8 text-xl justify-center'>
            <button onClick={()=>setDele((p)=>!p)}><i class="fa-solid fa-trash text-red-500"></i></button>
           
            <button><i class="fa-solid fa-eye"></i></button>
            </div>
            </td>
        </tr>
        {
          DeleteCon && <DeleteConfirm Open={setDele}/>
        }
        
    </>
  )
}

export default EmpPayData