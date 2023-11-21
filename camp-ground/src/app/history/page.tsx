import styles from "@/styles/FontPage.module.css"
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import getBookings from '@/libs/getBookings'
import BookingPanel from "@/components/BookingPanel"
import UpdateBookingForm from "@/components/admin/UpdateBooking"


export default async function History() {
    // const bookingItems = useAppSelector(state => state.campgroundSlice.campgroundItems);
    // const dispatch = useDispatch<AppDispatch>()
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.token) return null
    const bookings = await getBookings(session.user.token);

    return (
        <main className='w-[100%] flex flex-col items-center space-y-4 mt-[150px] w-screen'>
            <div className={`${styles.campgroundFont} uppercase text-white text-bold text-[40px] transition-transform transform hover:scale-[1.055] duration-300`}>
                All Booking History
            </div>
            <div className="w-screen">
                <div className={`${styles.campgroundFont} w-[100%] flex flex-wrap justify-around text-2xl font-bold`}>
                    {bookings.data.map((booking: Object, index: number) => (
                        <div key={booking._id} className={`w-[48%] ${index % 2 === 0 ? 'pl-0' : 'pl-4'}`}>
                            <BookingPanel
                                token={session.user ? session.user.token : null}
                                id={booking._id}
                                bookingDate={booking.bookingDate}
                                checkOutDate={booking.checkoutDate}
                                user={booking.user}
                                all={true}
                            />
                        </div>
                    ))}
                </div>

                <div className="my-[50px] px-[90px]">
                    <UpdateBookingForm token={session.user.token} />
                </div>
            </div>
            {/* {     
                bookingItems.length === 0 ?
                    <div className={`${styles.campgroundFont} text-2xl font-bold`}>
                        <div>
                            <Image className="w-[400px] h-[400px] mt-[100px]"
                            src="/images/dontKnow.png"
                            alt="Error to load picture"
                            width={1000}
                            height={1000}/>
                        </div>
                    </div>
                    :
                    bookingItems.map((item) => (
                        <div className={`${styles.campgroundFont} bg-white rounded-xl w-[90%] pl-5 py-4 text-black`} 
                        key={item.campgroundId}>
                            <div className='flex font-bold text-[20px]'>Campground Name : 
                            <span className='font-normal pl-5'>{item.campgroundName}</span></div>
                            <div className='flex font-bold text-[20px]'>checkIn Date : 
                            <span className='font-normal pl-5'>{item.checkInDate}</span></div>
                            <div className='flex font-bold text-[20px]'>checkOut Date : 
                            <span className='font-normal pl-5'>{item.checkOutDate}</span></div>

                            <button
                                className='bg-red-500 text-white border-2 border-red-800 border-opacity-100
                                font-semibold py-2 px-6 rounded-lg z-3
                                transform transition-colors duration-300 hover:bg-rose-800  hover:border-white
                                p-3 mt-2'
                                onClick={() => { dispatch(removeBooking(item)) }}
                            >Cancel Booking</button>
                        </div>
                    ))
            } */}
        </main>
    )
}