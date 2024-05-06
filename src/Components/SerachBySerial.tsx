import {ChangeEvent, useContext} from 'react'
import { BikeContext } from '../context/BikeContext'
const SerachBySerial = () => {
    const { serialNum, setSerialNum } = useContext(BikeContext)
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSerialNum(e.target.value)
    }
    return (
        <div className='px-32 mt-16 flex items-center justify-center flex-col gap-8'>
            <h1 className='text-2xl text-white'>Sort by Serial Number</h1>
            <input
                type="text"
                placeholder="Search by Serial Number"
                        value={serialNum}
                        onChange={handelChange}
                className="bg-slate-200 px-5 py-2 placeholder:text-black/50 w-[200px]  h-[40px] rounded outline-none"
                />
        </div>
    
)
}

export default SerachBySerial