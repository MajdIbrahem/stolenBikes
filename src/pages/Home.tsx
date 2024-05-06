import { useContext, useEffect, useState } from 'react'
import Bike from '../Components/Bike'
import Hero from '../Components/Hero'
import Loading from '../Components/Loading'
import Pagination from '../Components/Pagination'
import SerachByDate from '../Components/SerachByDate'
import SerachBySerial from '../Components/SerachBySerial'
import { BikeContext } from '../context/BikeContext'
import { BikeType } from '../types'
import { motion } from 'framer-motion'
const Home = () => {
    const {bikes,setCurrentStatus,currentStatus,error} = useContext(BikeContext)
    
    
    
    return (
        <>
            <Hero></Hero>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <SerachBySerial></SerachBySerial>
                <SerachByDate></SerachByDate>
            </div>
            {currentStatus === "loading" && <Loading></Loading>}
            {currentStatus==="active" &&(<>
                <div className="px-16 py-32 flex items-center justify-center gap-8 flex-wrap">
                {bikes.map((bike:BikeType ) => {
                    return <Bike bike={bike} key={bike.id}></Bike>
                })}
            </div>
            <Pagination></Pagination></>)}
            {currentStatus === "error" && <div className='flex items-center justify-center px-32 py-32 text-red-500'>
            {error}
            </div>}
        </>   
)
}

export default Home