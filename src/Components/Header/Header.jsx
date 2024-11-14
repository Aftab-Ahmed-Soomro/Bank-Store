import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-slate-300 sticky'>
      <div>
        <h1 className='font-bold text-2xl'>BANKSTORE</h1>
      </div>
      <div>
        <ul className='flex gap-6 font-medium text-lg'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/deposit">Deposit</NavLink></li>
          {/* <li><NavLink to="/balance">Balance</NavLink></li> */}
          <li><NavLink to="/withdraw">Withdraw</NavLink></li>
        </ul>
      </div>
      <div>
        <NavLink to="/balance"><button className='font-medium text-lg bg-black text-white py-2 px-3 rounded'>Check Balance</button></NavLink>
      </div>
    </div>
  )
}

export default Header
