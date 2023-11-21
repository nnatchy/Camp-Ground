import styles from "@/styles/FontPage.module.css"
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import getBookings from '@/libs/getBookings'
import BookingPanel from "@/components/BookingPanel"
import UpdateBookingForm from "@/components/admin/UpdateBooking"
import { FaCalendar } from "react-icons/fa"


export default async function myBooking() {
    // const bookingItems = useAppSelector(state => state.campgroundSlice.campgroundItems);
    // const dispatch = useDispatch<AppDispatch>()
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.token) return null
    const bookings = await getBookings(session.user.token);

    return (
        <main className='w-[100%] flex flex-col items-center space-y-4 mt-[150px] h-screen'>
            <div className={`${styles.campgroundFont} uppercase font-bold text-[40px] flex transition-transform transform hover:scale-[1.055] duration-300 `}>
                {`${session ? session.user?.name : "Not Logged In"} Booking History`} <span className="pl-4"><FaCalendar/></span>
            </div>
            <div>
                <div className={`${styles.campgroundFont} text-2xl font-bold`}>
                    {bookings.data.map((booking: Object) => (
                        <div>
                            {
                                session.user._id == booking.user ?
                                    <BookingPanel token={session.user ? session.user.token : null} id={booking._id} bookingDate={booking.bookingDate} checkOutDate={booking.checkoutDate}
                                        user={booking.user} all={false} /> : null
                            }

                        </div>
                    ))}
                </div>
                <div>
                    <UpdateBookingForm token={session.user.token} />
                </div>
            </div>
        </main>
    )
}