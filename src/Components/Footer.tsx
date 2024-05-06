import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
return (
    <footer className='bg-black/80 flex justify-between px-16 py-5 items-center '>
        <p className='text-gray-200'>Privacy policy and terms and conditions 
            2023 &copy; Bike Index, a 501(c)(3) nonprofit - EIN 81-4296194
        </p>
        <Link to={'https://www.facebook.com/bikeindex'}><FaFacebook className='w-[40px] h-[40px] text-cyan-500' /></Link>
        <Link to={'https://twitter.com/BikeIndex'}><FaTwitter className='w-[40px] h-[40px] text-cyan-500' /></Link>
        <Link to={'https://www.instagram.com/bikeindex/'}><FaInstagram className='w-[40px] h-[40px] text-cyan-500' /></Link>
        
        
        
</footer>
)
}

export default Footer