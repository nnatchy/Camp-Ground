import LocationDateReserve from "@/components/LocationDateReserve"
import Image from 'next/image'
import styles from './page.module.css'
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"


export default async function Booking() {

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className={styles.main}>
            {
                session ?
                    <div className='flex items-center justify-center font-[400] text-xl text-center h-[40vh] text-white '>
                        <span className="pr-[30px] z-10 text-[30px] font-[800]">User Profile: </span>
                        <div className="text-left text-[25px] z-10 space-y-4">
                            <div><span className="font-bold pr-3">Name: </span> {profile.data.name}</div>
                            <div><span className="font-bold pr-3">Email: </span> {profile.data.email}</div>
                            <div><span className="font-bold pr-10">Tel: </span> {profile.data.tel}</div>
                            <div><span className="font-bold">Member Since: </span> {createdAt.toDateString()}</div>
                        </div>
                    </div>
                    : null
            }
            <div className="flex flex-col items-center h-[70vh]">
                <Image src={'/img/booking_bg.jpg'}
                    alt='background'
                    fill={true}
                    priority
                    objectFit='cover'
                    className="opacity-[0.5]"
                />
                <div className="text-center z-10">
                    <LocationDateReserve />
                </div>
            </div>
        </main>
    )
}