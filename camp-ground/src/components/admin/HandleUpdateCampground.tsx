'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { dbConnect } from "@/db/dbConnect"
import Booking from "@/db/models/Booking"
import { getServerSession } from "next-auth"
import { revalidateTag } from "next/cache"
import { redirect, useSearchParams } from "next/navigation"
import createBooking from "@/libs/createBooking"


export async function HandleUpdateCampground(cid: string, bookingDate: string, checkoutDate: string){
    const session = await getServerSession(authOptions);
    if (!session) return;
    if (!cid) return;
    const token = session.user?.token
    console.log(token)
    try {
        console.log(cid, bookingDate, checkoutDate)
        const res = await createBooking(cid, bookingDate, checkoutDate, token)
        // dbConnect();
        // const booking = await Booking.create({
        //     bookingDate:checkInDate,
        //     checkoutDate:checkOutDate,
        //     user: session.user?.id,
        //     campground : campgroundName
        // })
        console.log("Create Booking successful")
    } catch (err) {
         console.log("Error during creating booking: ", err)
    }
    revalidateTag("bookings")
    redirect("/information")
}



