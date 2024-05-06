import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
const NavBar = () => {
    const [isActive,setIsActive]=useState(false)
return (
    <header className='px-16 py-2 flex justify-between items-center bg-black/80 rounded-b shadow-md fixed z-10 w-full'>

        <Link onClick={() => { setIsActive(false) }} to={'/'}><img src={`${Logo}`} alt='logo' className='w-[75px] h-[50px]'></img></Link>
      
    </header>
)
}

export default NavBar