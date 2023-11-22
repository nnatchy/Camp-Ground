import styles from "@/styles/FontPage.module.css"
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import getBookings from '@/libs/getBookings'
import BookingItem from '@/components/BookingItem'


export default async function myBooking() {
    // const bookingItems = useAppSelector(state => state.campgroundSlice.campgroundItems);
    // const dispatch = useDispatch<AppDispatch>()
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null
    const bookings = await getBookings(session.user.token);

    return (
        <main className='w-[100%] flex flex-col items-center space-y-4 mt-[150px] w-screen h-screen'>
            <div className = {`${styles.campgroundFont} uppercase text-bold text-[40px]`}>
                {`${session? session.user?.name:"Dont Be Sign in Yet"} Booking History`}
            </div>
            <div>
                <div className={`${styles.campgroundFont} my-[50px] text-2xl font-bold`}>
                    {bookings.data.map((booking: Object) => (
                    <div>
                        {
                            session.user._id == booking.user ?
                            <BookingItem  token={session.user.token} id={booking._id} bookingDate={booking.bookingDate} checkOutDate={booking.checkoutDate} 
                            user={booking.user}/> : null
                        }
                    </div>
                    ))}
                </div>
            </div>
        </main>
    )
}