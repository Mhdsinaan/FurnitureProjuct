import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";


function Navbar() {
  return (
     <div>
      <div className='flex justify-between py-5 px-5  '>
        <div className='flex gap-3'>
            <h1 className='logo'>azaakki</h1>
            <h1>Home </h1>
            <h1 className='hover:text'>Kitchen</h1>
            <h1>Room</h1>
            <h1>Living</h1>
        </div>
        <div className='fi'>
            <h1><input type="text"
            placeholder='search'
            className='border pl-2 rounded-xl border-black mr -inset-16  '  /></h1>
        </div>
        <div className='flex gap-7  '>
            <h1><FaUserPlus size={26} id='32' /></h1>
            <h1><FaShoppingCart size={26} /></h1>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
