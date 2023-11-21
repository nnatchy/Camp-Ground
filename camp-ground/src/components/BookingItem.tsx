import deleteBooking from "@/libs/deleteBooking"
import getBooking from "@/libs/getBooking"
import getUserProfile from "@/libs/getUserProfile"
import styles from "@/styles/FontPage.module.css"
import dayjs from "dayjs"
import { Date } from "mongoose"
import { revalidateTag } from "next/cache"
import Link from "next/link"
import { redirect } from "next/navigation"

interface Props{
    id:string
    token:string
    bookingDate:Date
    checkOutDate:Date
    user:string
    all:boolean
}

export default async function BookingItem({id,token,bookingDate,checkOutDate,user,all}:Props){
    const booking = await getBooking(id,token);

    const handleDeleteBooking = async ( Form :FormData) => {
        "use server"
        try {
            const res = await deleteBooking(id, token)
            alert('Delete Successful YAYA')
            console.log('Delete Booking successful')
            
            revalidateTag("bookings");

            setTimeout(() => {
                window.location.reload();
            }, 3000)
            redirect("/history")
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <form action={handleDeleteBooking}>
            <div className={`${styles.campgroundFont} bg-white rounded-xl w-screen pl-5 py-4 text-black mt-[30px]`} >
                    <div className="ml-[10%]">
                        <div className='flex font-bold text-[20px]'>Booking id: 
                        <span className='font-normal pl-5'>{id}</span></div>    
                        <div className='flex font-bold text-[20px]'>Campground Name : 
                        <span className='font-normal pl-5'>{booking.data.campground.name}</span></div>
                        {   all ?
                            <div className='flex font-bold text-[20px]'>User Id: 
                            <span className='font-normal pl-5'>{user}</span></div>
                            : null
                        }
                        <div className='flex font-bold text-[20px]'>BookingDate : 
                        <span className='font-normal pl-5'>{dayjs(bookingDate).format('YYYY/MM/DD')}</span></div>              
                        <div className='flex font-bold text-[20px]'>Check Out Date: 
                        <span className='font-normal pl-5'>{dayjs(checkOutDate).format('YYYY/MM/DD')}</span></div>
                    </div>
                    <div className="flex flex-row">
                        <button type="submit"
                            className='bg-red-500 text-white border-2 border-red-800 border-opacity-100
                            font-semibold py-2 px-6 rounded-lg z-3
                            transform transition-colors duration-300 hover:bg-rose-800  hover:border-white
                            p-3 mt-2 ml-[15%]'>
                            Cancel Booking
                        </button>
                    </div>
            </div>
        </form>
    )
}