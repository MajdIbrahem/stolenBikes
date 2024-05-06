import React from 'react'
import bikeImage from '../assets/santa-cruz.png'
import usedImage from '../assets/usedBy.png'
import { motion } from 'framer-motion'
const Hero = () => {
    return (<>
        <div className='flex items-center justify-center gap-12 px-16 py-20 bg-gray-200 w-full flex-col md:flex-row'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible:{opacity:1,x:0}
            }} className='flex flex-col items-center justify-center gap-10 '>
                <h1 className='text-4xl font-bold text-blue-500'>BIKE REGISTRATION THAT WORKS</h1>
                <p className='text-2xl font-bold text-black'>STOLEN BICYCLES WE HELPED</p>
                <p className='text-2xl font-semibold text-black'>Over $25,138,530 Worth of Bikes Recovered</p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: +100 },
                    visible:{opacity:1,x:0}
                }}>
                <img src={`${bikeImage}`} className='w-[400px] h-[400px]'></img>
            </motion.div>
        </div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -300 },
                visible:{opacity:1,x:0}
            }}className='flex items-center justify-center flex-col bg-white gap-12'>
            <h1 className='text-4xl font-bold text-blue-500 mt-10'>Used By</h1>
            <img src={`${usedImage}`} alt="used by" className='w-full h-[350px] object-fill' />
        </motion.div>
        </>
)
}

export default Hero