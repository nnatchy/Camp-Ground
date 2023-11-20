'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { dbConnect } from "@/db/dbConnect"
import Booking from "@/db/models/Booking"
import { getServerSession } from "next-auth"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function BookingAction(addBooking: FormData){
    const session = getServerSession(authOptions);
    const campgroundName = addBooking.get("campgroundName")
    const checkInDate = addBooking.get("checkInDate")
    const checkOutDate = addBooking.get("checkOutDate")
        
    try {
        dbConnect();
        const booking = await Booking.create({
            bookingDate:checkInDate,
            checkoutDate:checkOutDate,
            user: session.user?.id,
            campground : campgroundName
        })
        console.log("Create Campground successful")
    } catch (err) {
         console.log("Error during creating campground: ", err)
    }
    revalidateTag("bookings")
    redirect("/information")
}



