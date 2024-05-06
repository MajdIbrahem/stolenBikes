import { useContext } from 'react'
import { BikeContext } from '../context/BikeContext';
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";

const Pagination = () => {
    const { page, setPage } = useContext(BikeContext)
    const next = () => {
        setPage(page+1)
    }
    const prev = () => {
        if (page === 1) {
            return
        }
        setPage(page-1)
    }
    const multiPagesNext = () => {
        setPage(page+3)
    }
    const multiPagesprev = () => {
       
        if (page === 2) {
            setPage(page-1)
        }else
        if(page===3){
            setPage(page-1)
        }else
        setPage(page-3)
    }

    return (
        <div className='flex items-center justify-center flex-col gap-4 mb-16 px-32 '>
            <ul className='flex items-center justify-center flex-row gap-2 text-xl '>
                <li>
                    <button onClick={prev} className=' outline-none rounded-full w-8 h-8 bg-white/70'> <LuMoveLeft className='text-cyan-400 w-[30px] h-[30px]' /></button>
                    
                </li>
                <li><button onClick={multiPagesprev} className={`${page===1 ? "hidden" :"' outline-none  text-cyan-700 text-2xl'"}`}>...</button></li>
                <li><button className=' outline-none rounded-full w-8 h-8  text-cyan-700 bg-white'>{page}</button></li>
                <li><button onClick={()=>{}} className='outline-none rounded-full w-8 h-8 bg-cyan-700 text-white' >{page+1 }</button></li>
                <li><button className=' outline-none rounded-full w-8 h-8  bg-cyan-700 text-white' >{ page+2}</button></li>
                <li><button onClick={multiPagesNext} className=' outline-none  text-cyan-700 text-2xl'>...</button></li>
                <li>
                    <button onClick={next} className='outline-none rounded-full w-8 h-8 bg-white/70' ><LuMoveRight className='text-cyan-400 w-[30px] h-[30px]' /></button>
                </li>
            </ul>
        </div>
    )
    }

    export default Pagination