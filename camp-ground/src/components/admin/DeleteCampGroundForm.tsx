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
        <div className={`${styles.campgroundFont} my-[50px] h-[70%] rounded-[10px] opacity-60 
        text-black dark:text-white bg-zinc-100 dark:bg-zinc-900 w-full pt-[30px] hover:opacity-100 transition-opacity duration-300 relative`}>
            <div className="text-black dark:text-slate-100 text-[2vw] text-center font-semibold">
                Delete Campground Form
            </div>
            <p className="text-center mt-6 text-[30px] font-bold text-red-600">
                BE CAREFUL !!! ONE TIME SUBMIT
            </p>
            <div className="flex justify-center items-center h-full">
                <form action={handleDeleteCampground} className="w-[90%]">
                    <div className="py-[40px] space-x-[20px] flex flex-col items-center">
                        <button
                            type="submit"
                            className="opacity-100 rounded-full w-full text-[20px] bg-red-600 text-white ring-slate-600 p-[10px] 
                    duration-300 hover:bg-rose-800">
                            Delete This Campground
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}