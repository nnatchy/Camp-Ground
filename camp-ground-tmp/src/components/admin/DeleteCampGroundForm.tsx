'use client'
import deleteCampground from "@/libs/deleteCampground"
import { FormEvent} from "react"
import { useRouter } from "next/navigation"

export default function DeleteCampgroundForm({ cid, token }: { cid: string, token: string }) {

    const router = useRouter();

    const handleDeleteCampground = async (event: FormEvent<HTMLFormElement>) => {
        try {
            const res = await deleteCampground(cid, token)
            alert('Delete Successful YAYA')
            console.log('Delete Campground successful')
            // router.replace('/campground')
            router.back()
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <form onSubmit={handleDeleteCampground} className="flex flex-col items-center justify-center w-full h-full
		border-[#21628d] hover:border-[#3ce7e4] rounded-lg space-y-2 px-10 py-5 mt-10 border-4 bg-white
         transform transition-colors duration-300">
            <div className="text-xl text-gray-700 font-bold">Delete Campground</div>
            <div className="flex items-center w-full my-2">
                <button type="submit" className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
  font-semibold py-2 px-2 rounded-lg z-3
  transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent w-full">
                    Delete
                </button>
            </div>
        </form>
    )
}