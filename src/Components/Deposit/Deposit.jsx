import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./Deposit.css"

const Deposit = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  // console.log(value);
  return (
    <div className="flex flex-col justify-center items-center h-[86vh] bg-slate-100">
      <h1 className='font-medium text-5xl mb-8'>DEPOSIT AMOUNT :</h1>
      <div className='flex py-20 px-16 bg-white rounded-lg box'>
        <input className='border-2 border-slate-200 p-4' placeholder='Enter Amount' type="number" onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>dispatch({type:"deposit", payload:Number(value)})} className='font-medium text-lg bg-black text-white py-2 px-3 rounded'>Deposit</button>
      </div>
    </div>
  )
}

export default Deposit
