'use client'
import BookingForm from "@/components/BookingForm"
import { useSearchParams } from "next/navigation";
import getCampground from "@/libs/getCampground";

export default async function Booking(){
    const urlParams = useSearchParams();
    const cid = urlParams.get('id');

    if (!cid) return null;
    const campgroundDetail = await getCampground(cid);

    return (
        <div className="w-screen h-screen items-center center 
        flex justify-center">
            <BookingForm cid={campgroundDetail.data.id} name={campgroundDetail.data.name}
            picture={campgroundDetail.data.picture} address={campgroundDetail.data.address}
            district={campgroundDetail.data.district} province={campgroundDetail.data.province}
            postalCode={campgroundDetail.data.postalCode} tel={campgroundDetail.data.tel}/>
        </div>
    )
}
