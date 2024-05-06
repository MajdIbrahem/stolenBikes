import { createContext, useState, useEffect, Children } from 'react'
import axios from 'axios';
import { BikeType } from '../types';
interface ContextType{
  bikes: BikeType[];
  setBikes:any
  page: number;
  setPage: (page: number) => void;
  currentStatus: string;
  setCurrentStatus: (currentStatus: string) => void
  error: string
  setError: (error: string) => void;
  serialNum: string,
  setSerialNum:(serialNum: string)=>void
}
const initailState = {
  bikes: [],
  setBikes:()=>{},
  page: 1,
  setPage: () => { },
  currentStatus: "active",
  setCurrentStatus: () => { },
  error: "",
  setError: () => { },
  serialNum: "",
  setSerialNum:() => { }
}

export const BikeContext=createContext<ContextType>(initailState)
const BikeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [bikes, setBikes] = useState([])
  const [page, setPage] = useState(1)
  const [currentStatus, setCurrentStatus] = useState("active")
  const [error, setError] = useState("")
  const [serialNum,setSerialNum]=useState('')
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        setCurrentStatus("loading")
        const res = await axios.get(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10&serial=${serialNum}&location=%20Munich%20area&stolenness=stolen`)
        const data = await res.data.bikes
        setBikes(data)
        setCurrentStatus("active")
      } catch (err) {
        setCurrentStatus("error")
      
        setError("Some thing Wrong")
      }
    }
    
    fetchBikes()
  }, [page, serialNum,setBikes])
  
  return (
    <BikeContext.Provider value={{bikes,setBikes,page,setPage,currentStatus,setCurrentStatus,error,setError,serialNum,setSerialNum}}>{children}</BikeContext.Provider>
  )
}

export default BikeProvider