'use client'
import { HandleDeleteCampground } from "./handler/HandleDeleteCampground"
import styles from "@/styles/FontPage.module.css"

export default function DeleteCampgroundForm({ cid, token }: { cid: string, token: string }) {

    const handleDeleteCampground = async () => {
        try {
            await HandleDeleteCampground(cid, token)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className={`${styles.campgroundFont} my-[50px] w-[600px] h-[70%] bg-white rounded-[10px] opacity-60
            text-black bg-zinc-100 w-full pt-[30px]`}>
                <div className="text-black text-[2vw] text-center ">
                    Delete This Campground
                </div>
            <form action={handleDeleteCampground} className="relative opacity-100 mt-[25px] mr-[40px]">
                <div className="py-[40px] space-x-[20px] flex flex-col items-center">
                    <button
                        type="submit"
                        className="opacity-100 rounded-full w-full text-[20px] bg-[#ffa900] text-white ring-slate-600 p-[5px] py-[10px] 
                        duration-300 hover:bg-indigo-800">
                        Delete This Campground
                    </button>
                </div>
            </form>
        </div>              
    )
}