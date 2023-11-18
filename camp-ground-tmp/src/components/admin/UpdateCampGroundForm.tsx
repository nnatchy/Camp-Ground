import { dbConnect } from "@/db/dbConnect"
import Campground from "@/db/models/Campground"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function DeleteCampgroundForm() {
    const addCampground = async (addCampground: FormData) => {
        "use server"
        const name = addCampground.get("name")
        const address = addCampground.get("address")
        const district = addCampground.get("district")
        const province = addCampground.get("province")
        const postalCode = addCampground.get("postalCode")
        const tel = addCampground.get("tel")
        const picture = addCampground.get("picture")

        try {
            await dbConnect()
            const campground = await Campground.create({
                name,
                address,
                district,
                province,
                postalCode,
                tel,
                picture
            })
        } catch (error) {
            console.log(error)
        }
        revalidateTag("campgrounds")
        redirect("/campground")
    }

    return (
        <form action={addCampground} className="flex flex-col items-center justify-center w-full h-full
		border-[#21628d] hover:border-[#3ce7e4] rounded-lg space-y-2 px-10 py-5 mt-10 border-4 bg-white
         transform transition-colors duration-300">
            <div className="text-xl text-gray-700 font-bold">Update Campground Form</div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="name">Campground name</label>
                <input type="text" required id="name" name="name" placeholder="Campground name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="address">Address</label>
                <input type="text" required id="address" name="address" placeholder="Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="district">District</label>
                <input type="text" required id="district" name="district" placeholder="District"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="province">Province</label>
                <input type="text" required id="province" name="province" placeholder="Province"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="postalCode">Postal Code</label>
                <input type="text" required id="postalCode" name="postalCode" placeholder="Postal Code"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="tel">Tel.</label>
                <input type="text" required id="tel" name="tel" placeholder="Tel."
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="picture">Picture</label>
                <input type="text" required id="picture" name="picture" placeholder="Google drive URL"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" />
            </div>
            <div className="flex items-center w-full my-2">
                <button type="submit" className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
  font-semibold py-2 px-2 rounded-lg z-3
  transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent w-full">
                    Add
                </button>
            </div>
        </form>
    )
}