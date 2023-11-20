'use client'
import styles from "@/styles/FontPage.module.css"
import Image from "next/image"
import { CampgroundItem } from "@/interface"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import BookingInstruction from "./BookingInstruction"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addBooking } from "@/redux/features/bookSlice"
import { AppDispatch } from "@/redux/store"
import dayjs, { Dayjs } from "dayjs"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { BookingAction } from "@/action/BookingAction"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default function BookingForm() {
    const { data: session } = useSession();
    const [checkInDate, setCheckInDate] = useState<Dayjs | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Dayjs | null>(null);
    const router = useRouter();
    const urlParams = useSearchParams();
    const id = urlParams.get('id');
    const name = urlParams.get('name');
    const dispatch = useDispatch<AppDispatch>();
    // const sessionTmp = await getServerSession(authOptions)
    // if (!sessionTmp || !sessionTmp) return;
    if (!name) return null;
    if (!id) return null;

    const createBooking = () => {
        if (checkInDate && checkOutDate) {
            const item: CampgroundItem = {
                campgroundId: id,
                campgroundName: name,
                checkInDate: dayjs(checkInDate).format('YYYY/MM/DD'),
                checkOutDate: dayjs(checkOutDate).format('YYYY/MM/DD')
            }
            dispatch(addBooking(item))
            router.replace("/information");
        }
    }

    const handleAction = async () => {
        try {
            console.log("AYO")
            const res = await BookingAction(id, dayjs(checkInDate).format('YYYY/MM/DD'), dayjs(checkOutDate).format('YYYY/MM/DD'))
            
        } catch (err) {
            console.log("Err: ", err)
        }
    }

    return (
        <div className={`${styles.campgroundFont} relative w-screen h-screen`}>
            <div className="fixed inset-0 bg-cover bg-center z-0 saturate-100 opacity-80">
                <Image
                    src="/images/sky.jpg"
                    alt="Error to load wallpaper"
                    fill={true} />
            </div>
            <div className="relative flex justify-start items-center flex-row flex-wrap 
            w-screen h-screen space-x-[30px]">
                <div className="w-[100%] lg:w-[40%] ml-[10%]">
                    <BookingInstruction />
                </div>
                <div className="w-[600px] h-[70%] bg-white rounded-[10px] opacity-80 mt-[70px] 
                text-black bg-zinc-100">
                    <div className="text-black text-[30px] mt-[40px] text-center ">
                        Booking Your Campground
                    </div>
                    <form action={handleAction}>
                        <div className="relative opacity-100 ml-[40px] mt-[25px] mr-[40px]">
                            <div>
                                <label htmlFor="name" className="ml-[15px] block text-[12px] w-full opacity-60">
                                    Traveler Name
                                </label>
                                <input className="w-full mt-[5px] bg-white text-[15px] p-[10px] 
                                rounded-full indent-2 bg-white"
                                    type="text" id="name" placeholder="name" value={session ? session.user?.name : "Dont Sign In Yet"} readOnly />
                            </div>

                            <div className="mt-[20px]">
                                <label htmlFor="campgroundName" className="ml-[15px] block text-[12px] w-full opacity-60">
                                    Campground Name
                                </label>
                                <input className="w-full mt-[5px] bg-white text-[15px] p-[10px] 
                                rounded-full indent-2 bg-white"
                                    type="text" id="campgroundName" placeholder="Camp ground name" value={name} readOnly />
                            </div>

                            <div className="flex flex-row justify-start flex-wrap mt-[20px]">
                                <div>
                                    <label htmlFor="checkInDate" className="ml-[15px] block text-[12px] w-full 
                                    opacity-60">
                                        Check In Date
                                    </label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker id={checkInDate} className="mt-[5px] bg-white" value={checkInDate}
                                            onChange={(e) => { setCheckInDate(e) }} />
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className="w-full mt-[20px]">
                                <label htmlFor="checkOutDate" className="ml-[15px] block text-[12px] w-full 
                                    opacity-60">
                                    Check Out Date
                                </label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker className="mt-[5px] bg-white" value={checkOutDate}
                                        onChange={(e) => { setCheckOutDate(e) }} />
                                </LocalizationProvider>
                            </div>


                            <div className="pt-[40px] space-x-[20px] mt-[20px]">
                                <button type="submit" className="opacity-100 rounded-full w-full text-[20px] bg-[#ffa900] text-white
                                ring-slate-600 p-[5px] py-[10px] duration-300 hover:bg-indigo-800"
                                    onClick={createBooking}>
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