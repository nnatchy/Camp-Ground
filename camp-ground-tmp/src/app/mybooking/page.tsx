"use client"
import { removeBooking } from '@/redux/features/bookSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'


export default function myBooking() {
    const bookingItems = useAppSelector(state => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <main className='w-[100%] flex flex-col items-center space-y-4 mt-[12vh]'>
            {
                bookingItems.length === 0 ?
                    <div className='text-2xl font-bold'>No Vaccine Booking</div>
                    :
                    bookingItems.map((bookingItem) => (
                        <div className='bg-white rounded-xl w-[90%] pl-5 py-2 text-black' key={bookingItem.cid}>
                            <div className='flex font-bold text-[30px] mb-3'>{bookingItem.hospitalLocation}</div>
                            <div className='flex font-bold text-[20px]'>Name: <span className='font-normal pl-5'>{bookingItem.name}</span></div>
                            <div className='flex font-bold text-[20px]'>Surname: <span className='font-normal pl-5'>{bookingItem.surname}</span></div>
                            <div className='flex font-bold text-[20px]'>CID: <span className='font-normal pl-5'>{bookingItem.cid}</span></div>
                            <div className='flex font-bold text-[20px]'>Vaccine Date: <span className='font-normal pl-5'>{bookingItem.vaccineDate}</span></div>
                            <button
                                className='bg-red-500 text-white border-2 border-red-800 border-opacity-100
                                font-semibold py-2 px-10 rounded-lg z-3
                                transform transition-colors duration-300 hover:bg-rose-800  hover:border-white
                                p-3 mt-5
                                '
                                onClick={() => { dispatch(removeBooking(bookingItem)) }}
                            >Cancel Booking</button>
                        </div>
                    ))
            }
        </main>
    )
}