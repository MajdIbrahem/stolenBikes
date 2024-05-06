import React from 'react'
import { BikeType } from '../types'
import bikeImage from '../assets/download.png'
import { Link } from 'react-router-dom'
const Bike: React.FC<{ bike: BikeType }> = ({ bike }) => {
    
    const date: any = new Date(bike.date_stolen * 1000)
    
return (
    <div className='flex justify-center items-center gap-8 flex-col w-[350px] h-[500px] bg-black/50 border border-gray-500 rounded-lg'>
        <div className='h-2/5'>
            <Link to={`/bike/:${bike.id}`}>
            <img src={`${bike.large_img?bike.large_img:bikeImage }`} alt='' className='w-[350px] h-full object-fill'></img>
            </Link>
        </div>
        <div className='flex justify-center items-center gap-2 flex-col h-3/4 px-5 py-1'>
            <Link to={`/bike/:${bike.id}`}>
            <h1 className='text-blue-500 text-3xl text-center'>{bike.title}</h1>
            </Link>
            <h3 className='text-lg text-gray-200  text-center'><span className='text-xl font-semibold text-white'>Serial:</span> {bike.serial}</h3>
            <h4 className='text-lg text-gray-200 text-center'>Primary Color : {bike.frame_colors[0]}</h4>
            <h4>Date Stolen : {date.toLocaleString('en-US')}</h4>
            <p className='text-lg text-white text-center'><span className='text-xl text-red-500'>Stolen location:</span><br></br>{ bike.stolen_location? bike.stolen_location: "Not FOND"}</p>
        </div>
    </div>
)
}

export default Bike