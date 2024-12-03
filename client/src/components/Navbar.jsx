import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav flex gap-[20px] bg-green-600 h-[50Px] items-center ps-5">
         <NavLink to={'/'} 
         className={({isActive})=>isActive?'text-green-300 font-bold':'font-bold text-white'}
         >HOME</NavLink>
         <NavLink to={'/products'} 
         className={({isActive})=>isActive?'text-green-300 font-bold':'font-bold text-white'}
         >PRODUCTS</NavLink>
      </div>
    </div>
  )
}

export default Navbar
