'use client'
import updateBooking from "@/libs/updateBooking";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";
import { useState } from "react";
import { UpdateBookingAction } from "@/action/UpdateBookingAction";

export default function UpdateBookingForm() {
    const [id,setId] = useState(""); 
    const [checkInDate,setCheckInDate] = useState<Dayjs|null>(null);
    const [checkOutDate,setCheckOutDate] = useState<Dayjs|null>(null);

    const handleUpdateBooking = async () => {
        try {
            console.log("AYO")
            const res = await UpdateBookingAction(id, 
                dayjs(checkInDate).format('YYYY/MM/DD'), 
                dayjs(checkOutDate).format('YYYY/MM/DD'))
        } catch (err) {
            console.log("Err: ", err)
        }
    }

    return (
        <div>
            <form onSubmit={handleUpdateBooking} className="flex flex-col items-center justify-center w-screen 
            border-[#21628d] hover:border-[#3ce7e4] rounded-lg space-y-2 px-5 py-5 mt-10 border-4 bg-white
            transform transition-colors duration-300 text-black">
                <div className="text-xl font-bold">Add Campground Form</div>
                <div className="w-full">
                    <label className="w-1/4 block pr-2 font-semibold text-[20px]" htmlFor="name">
                        Insert Your Booking Id That You Want To Edit
                    </label>
                    <input type="text" required id="name" name="name" placeholder="Campground name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                        focus:outline-none focus:border-blue-400 transition duration-300"  
                        value={id} onChange={(e)=>setId(e.target.value)}/>
                </div>
                <div className="flex flex-row justify-start">
                    <div className="w-full">
                        <label htmlFor="checkOutDate" className="w-1/4 block pr-2 font-semibold text-[20px]">
        `                   New Check In Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="mt-[5px] bg-white" value={checkInDate}
                        onChange={(e)=>{setCheckInDate(e)}}/>
                        </LocalizationProvider>
                    </div>
                
                    <div className="w-full">
                        <label htmlFor="checkOutDate" className="w-1/4 block pr-2 font-semibold text-[20px]">
        `                   New Check Out Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="mt-[5px] bg-white" value={checkInDate}
                        onChange={(e)=>{setCheckOutDate(e)}}/>
                        </LocalizationProvider>
                    </div>
                </div>
                    <div>
                        <button type="submit" className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
                            font-semibold py-2 px-2 rounded-lg z-3
                            transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent w-full">
                            Edit Your Booking Schedule
                        </button>
                    </div>                  
            </form>
        </div>
    )
}