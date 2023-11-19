"use client"
import { removeBooking } from '@/redux/features/bookSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import styles from "@/styles/FontPage.module.css"


export default function myBooking() {
    const bookingItems = useAppSelector(state => state.campgroundSlice.campgroundItems)
    const dispatch = useDispatch<AppDispatch>()
    const {data:session} = useSession();

    return (
        <main className='w-[100%] flex flex-col items-center space-y-4 mt-[150px] h-screen'>
            <div className = {`${styles.campgroundFont} uppercase text-bold text-[40px]`}>
                {`${session? session.user?.name:"Dont Be Sign in Yet"} Booking History`}
            </div>
            {     
                bookingItems.length === 0 ?
                    <div className={`${styles.campgroundFont} text-2xl font-bold`}>
                        <div>
                            <Image className="w-[400px] h-[300px] mt-[100px]"
                            src="/images/dontKnow.jpg"
                            alt="Error to load picture"
                            width={1000}
                            height={1000}/>
                        </div>
                    </div>
                    :
                    bookingItems.map((item) => (
                        <div className='bg-white rounded-xl w-[90%] pl-5 py-2 text-black' key={item.campgroundId}>
                            <div className='flex font-bold text-[20px]'>Name: <span className='font-normal pl-5'>{item.campgroundName}</span></div>
                            <div className='flex font-bold text-[30px] mb-3'>{item.duration}</div>
                            <div className='flex font-bold text-[30px] mb-3'>{item.bookingDate}</div>
                            <div className='flex font-bold text-[30px] mb-3'>{item.people}</div>

                            <button
                                className='bg-red-500 text-white border-2 border-red-800 border-opacity-100
                                font-semibold py-2 px-10 rounded-lg z-3
                                transform transition-colors duration-300 hover:bg-rose-800  hover:border-white
                                p-3 mt-5
                                '
                                onClick={() => { dispatch(removeBooking(item)) }}
                            >Cancel Booking</button>
                        </div>
                    ))
            }
        </main>
    )
}