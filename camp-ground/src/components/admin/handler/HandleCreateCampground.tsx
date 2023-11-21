'use server'
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import createCampground from "@/libs/createCampground"


export async function HandleCreateCampground(name: string, address: string, district: string, province: string, postalCode: string, tel: string, picture: string, token: string){
    console.log(token)
    try {
        const res = await createCampground(name, address, district, province, postalCode, tel, picture, token)
        console.log(res)
        console.log("Create Campground successful")
    } catch (err) {
        alert("Not match constraint Ja")
         console.log("Error during creating booking: ", err)
    }
    revalidateTag(`campgrounds`)
    redirect(`/information`)
}


