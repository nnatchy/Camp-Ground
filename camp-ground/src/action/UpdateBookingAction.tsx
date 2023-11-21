'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { dbConnect } from "@/db/dbConnect"
import Booking from "@/db/models/Booking"
import { getServerSession } from "next-auth"
import { revalidateTag } from "next/cache"
import { redirect, useSearchParams } from "next/navigation"
import createBooking from "@/libs/createBooking"
import updateBooking from "@/libs/updateBooking"


export async function UpdateBookingAction(id: string, bookingDate: string, checkoutDate: string){
    const session = await getServerSession(authOptions);
    if (!session) return;
    if (!id) return;
    const token = session.user?.token;
    console.log(token)
    try {
        console.log(id, bookingDate, checkoutDate)
        const res = await updateBooking(id, bookingDate, checkoutDate, token);
        // dbConnect();
        // const booking = await Booking.create({
        //     bookingDate:checkInDate,
        //     checkoutDate:checkOutDate,
        //     user: session.user?.id,
        //     campground : campgroundName
        // })
        console.log("Update Booking successful")
    } catch (err) {
         console.log("Error during creating booking: ", err)
    }
    revalidateTag("updateBooking")
    redirect("/")
}



