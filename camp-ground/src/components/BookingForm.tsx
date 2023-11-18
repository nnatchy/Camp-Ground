'use client'
import styles from "@/styles/FontPage.module.css"
import Image from "next/image"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { MenuItem, Select } from "@mui/material"
import BookingInstruction from "./BookingInstruction"

export default function BookingForm(){

    return (
        <div className={`${styles.campgroundFont} relative w-screen h-screen`}>
            <div className="fixed inset-0 bg-cover bg-center z-0 saturate-100 opacity-80">
                <Image  
                src="/images/sky.jpg" 
                alt="Error to load wallpaper" 
                fill={true}/>
            </div>
            <div className="relative flex justify-start items-center flex-row flex-wrap 
            w-screen h-screen space-x-[30px]">
                <div className="w-[100%] lg:w-[40%] ml-[10%]"> 
                    <BookingInstruction/>
                </div> 
                <div className="w-[600px] h-[70%] bg-white rounded-[10px] opacity-80 mt-[30px] 
                text-black bg-zinc-100 ">
                    <div className="text-black text-[30px] mt-[40px] text-center ">
                        Booking Your Campground
                    </div>
                    <form action="">
                        <div className="relative opacity-100 ml-[40px] mt-[25px] mr-[40px]">
                            <div>
                                <label htmlFor="name" className="ml-[15px] block text-[12px] w-full opacity-60">
                                    Traveler Name
                                </label>
                                <input className="w-full mt-[5px] bg-white text-[15px] p-[10px] 
                                rounded-full indent-2 bg-white" 
                                type="text" id="name" placeholder="name" value="guncv" readOnly/>
                            </div>
                            
                            <div className="mt-[20px]">
                                <label htmlFor="name" className="ml-[15px] block text-[12px] w-full opacity-60">
                                    Campground Name
                                </label>
                                <input className="w-full mt-[5px] bg-white text-[15px] p-[10px] 
                                rounded-full indent-2 bg-white" 
                                type="text" id="name" placeholder="name" value="Guncv Pattaya Campground" readOnly/>
                            </div>

                            <div className="flex flex-row justify-start flex-wrap mt-[20px]">

                                <div className="w-[45%]">
                                    <label htmlFor="name" className="ml-[15px] block text-[12px] w-full opacity-60">
                                        How Many People ?
                                    </label>
                                    <input className="w-full mt-[5px] bg-white text-[15px] p-[10px] 
                                    rounded-full indent-2 bg-white" 
                                    type="number" min={1} max={5} defaultValue={1} id="name" placeholder="name" value="Guncv Pattaya Campground"/>
                                </div>

                                <div className="ml-[40px]">
                                    <label htmlFor="name" className="ml-[15px] block text-[12px] w-full opacity-60">
                                        Duration
                                    </label>
                                    <Select name="hospital" className={`${styles.campgroundFont} indent-2 items-center text-[15px]  w-[240px] h-[40px] 
                                    bg-white rounded-full mt-[5px]`} >
                                        <MenuItem value="Chula" className={`${styles.campgroundFont}`}>1 day</MenuItem>
                                        <MenuItem value="Rajavithi" className={styles.campgroundFont}>2 days</MenuItem>
                                        <MenuItem value="Thammasat" className={styles.campgroundFont}>3 days</MenuItem>
                                    </Select>
                                </div>
                            </div>

                            <div className="w-full mt-[20px]">
                                    <label htmlFor="name" className="ml-[15px] block text-[12px] w-full opacity-60">
                                        Reserve Date
                                    </label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker className="mt-[5px] bg-white"/>
                                    </LocalizationProvider>
                                </div>


                            <div className="pt-[40px] space-x-[20px] mt-[20px]">
                                <button type="submit" className="opacity-100 rounded-full w-full text-[20px] bg-[#ffa900] text-white
                                ring-slate-600 p-[5px] py-[10px] duration-300 hover:bg-indigo-800">
                                    Booking Campground
                                </button>
                            </div>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    )
}