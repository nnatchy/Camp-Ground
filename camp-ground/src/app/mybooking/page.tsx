"use client"
import { removeBooking } from '@/redux/features/bookSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'


export default function myBooking() {
    const bookingItems = useAppSelector(state => state.campgroundSlice.campgroundItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <main className='w-[100%] flex flex-col items-center space-y-4 mt-[150px] h-screen'>
            {
                bookingItems.length === 0 ?
                    <div className='text-2xl font-bold'>No Vaccine Booking</div>
                    :
                    bookingItems.map((item) => (
                        <div className='bg-white rounded-xl w-[90%] pl-5 py-2 text-black' key={item.campgroundId}>
                            <div className='flex font-bold text-[30px] mb-3'>{item.campgroundAddress}</div>
                            <div className='flex font-bold text-[20px]'>Name: <span className='font-normal pl-5'>{item.campgroundName}</span></div>

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