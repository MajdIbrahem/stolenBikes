//Note : in Api there is no date feltering 
import React, { useEffect, useContext,useState} from 'react'
import { BikeContext } from '../context/BikeContext'
interface FormData {
  date: string;
}
const SerachByDate = () => {
    const { setBikes, bikes, page, serialNum } = useContext(BikeContext)
    const [formData, setFormData] = useState<FormData>({ date: '' });

    
const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setBikes(filteredData)
};

const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setFormData({ ...formData, date: event.target.value });
};
    const filteredData = bikes.filter(item => {
        const date: any = new Date(item?.date_stolen * 1000)
        const stringDate=`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
        console.log(stringDate)
        return stringDate===formData.date ;
        
    })
    console.log(filteredData)
    return (
        <div className='px-32 mt-16 flex items-center justify-center flex-col gap-8'>
            <h1 className='text-2xl text-white'>Sort by Date</h1>
            <form onSubmit={handleFormSubmit} className='px-32  flex items-center justify-center gap-8'>
            <input
                type="date"
                value={formData.date}
                            onChange={handleDateChange}
                            className="bg-slate-200 px-5 py-2 placeholder:text-black/50 w-[200px]  h-[40px] rounded outline-none"
            />
            <button className='bg-cyan-500 text-black px-5 py-2 rounded' type="submit">Submit</button>
        </form>
        </div>
)
}

export default SerachByDate