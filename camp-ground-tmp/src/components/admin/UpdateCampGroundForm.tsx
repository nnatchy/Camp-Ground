'use client'
import updateCampground from "@/libs/updateCampground"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function UpdateCampGroundForm({ cid, token }: { cid: string, token: string }) {
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [district, setDistrict] = useState<string>('');
    const [province, setProvince] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [picture, setPicture] = useState<string>('');

    const [error, setError] = useState<string>('');

    const router = useRouter();

    const handleUpdateCampground = async (event: FormEvent<HTMLFormElement>) => {
        try {
            const res = await updateCampground(cid, name, address, district, province, postalCode, tel, picture, token);
            console.log('Update Campground successful');
            router.push(`/campground/${cid}`)
            // router.push('')
        } catch (err) {
            alert('Update Failed: Not match the constraint')
            console.log("THERE's ERROR")
            return false;
        }
    }

    useEffect(() => {
        router.prefetch(`/campground/${cid}`)
      }, [router])

    return (
        <form onSubmit={handleUpdateCampground} className="flex flex-col items-center justify-center w-full h-full
		border-[#21628d] hover:border-[#3ce7e4] rounded-lg space-y-2 px-10 py-5 mt-10 border-4 bg-white
         transform transition-colors duration-300">
            <div className="text-xl text-gray-700 font-bold">Update Campground Form</div>

            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="name">Campground name</label>
                <input type="text" required id="name" name="name" placeholder="Campground name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="address">Address</label>
                <input type="text" required id="address" name="address" placeholder="Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="district">District</label>
                <input type="text" required id="district" name="district" placeholder="District"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" onChange={(e) => setDistrict(e.target.value)} />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="province">Province</label>
                <input type="text" required id="province" name="province" placeholder="Province"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" onChange={(e) => setProvince(e.target.value)} />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="postalCode">Postal Code</label>
                <input type="text" required id="postalCode" name="postalCode" placeholder="Postal Code"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" onChange={(e) => setPostalCode(e.target.value)} />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="tel">Tel.</label>
                <input type="text" required id="tel" name="tel" placeholder="Tel."
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" onChange={(e) => setTel(e.target.value)} />
            </div>
            <div className="flex items-center w-full my-2">
                <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="picture">Picture</label>
                <input type="text" required id="picture" name="picture" placeholder="Google drive URL"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400 transition duration-300" onChange={(e) => setPicture(e.target.value)} />
            </div>
            <div className="flex items-center w-full my-2">
                <button type="submit" className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
  font-semibold py-2 px-2 rounded-lg z-3
  transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent w-full">
                    Add
                </button>
            </div>
            {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded">
                    {error}
                </div>
            )}
        </form>
    )
}