import React from 'react'
import { useSelector } from 'react-redux';

const CheckBalance = () => {
  const bankData = useSelector((state)=>state?.amount);
  console.log(bankData)
  return (
    <div className="flex flex-col justify-center items-center h-[86vh] bg-slate-100">
      <h1 className='font-medium text-5xl mb-8'>CURRENT BALANCE :</h1>
      <div className='flex py-20 px-40 rounded-lg box bg-black'>
        <h1 className='font-medium text-5xl mb-8 text-white'>{bankData} $</h1>
      </div>
    </div>
  )
}

export default CheckBalance