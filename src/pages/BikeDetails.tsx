import axios from 'axios'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { BikeType } from '../types'
import bikeImage from '../assets/download.png'
const BikeDetails = () => {
    const { id } = useParams()
    
    const [bike, setBike] = useState<BikeType | null>()
    
    useEffect(() => {
        const getBikedata = async () => {
        const res = await axios.get(`https://bikeindex.org:443/api/v3/bikes/${id?.slice(1)}`)
        const data = await res.data.bike
        console.log(data)
        setBike(data)
    }
        getBikedata()
    }, [])
    const date: any = new Date((bike?.date_stolen ? bike.date_stolen : 50000 )* 1000)
    const dateReg:any=new Date((bike?.registration_created_at? bike?.registration_created_at : 50000) * 1000)
return (
    <div className='py-32 px-16 flex justify-center items-center gap-16 flex-col md:flex-row'>
        <div >
            <img  src={`${bike?.large_img?bike.large_img:bikeImage }`} alt='bikeImage' className='w-[500px] h-[500px] object-fill'></img>
        </div>
        <div className='flex justify-center items-center flex-col gap-8'>
            <h1 className='text-4xl text-blue-500 font-bold'>{bike?.title}</h1>
            <p className='text-gray-200 text-lg font-semibold'>Description :{bike?.description ? bike.description : "No Decription Found"}</p>
            <h4 className='text-2xl text-white font-semibold'>Date Stolen : {date.toLocaleString('en-US')}</h4>
            <h4 className='text-2xl text-white font-semibold'>Date Registeration : {dateReg.toLocaleString('en-US')}</h4>
            <p className='text-lg text-white text-center'><span className='text-xl text-red-500'>Stolen location:</span><br></br>{ bike?.stolen_location? bike.stolen_location: "Not FOND"}</p>

        </div>
    </div>
)
}

export default BikeDetails