import getBooking from "@/libs/getBooking"
import styles from "@/styles/FontPage.module.css"
import dayjs from "dayjs"
import { Date } from "mongoose"
import BookingItem from "./BookingItem"
interface Props {
    id: string
    token: string
    bookingDate: Date
    checkOutDate: Date
    user: string
    all: boolean
}

export default async function BookingPanel({ id, token, bookingDate, checkOutDate, user, all }: Props) {
    const booking = await getBooking(id, token);

    return (
        <div>
            <BookingItem id={id} 
            token={token} 
            cpName={booking.data.campground.name} 
            bookingDate={bookingDate} 
            checkOutDate={checkOutDate} 
            user={user} 
            all={all} />
        </div>
    )
}