'use client'
import { FormEvent, useState } from "react"
import { redirect, useRouter } from "next/navigation";
import { HandleUpdateCampground } from "./handler/HandleUpdateCampground";
import styles from "@/styles/FontPage.module.css"

interface Props {
    cid: string
    token: string
    cName: string
    cAddress: string
    cProvince: string
    cDistrict: string
    cPostalCode: string
    cTel: string
    cPicture: string
}

export default function UpdateCampGroundForm({ cid, token, cName, cAddress, cProvince, cDistrict, cPostalCode, cTel, cPicture }: Props) {

    const [name, setName] = useState<string>(cName);
    const [address, setAddress] = useState<string>(cAddress);
    const [district, setDistrict] = useState<string>(cDistrict);
    const [province, setProvince] = useState<string>(cProvince);
    const [postalCode, setPostalCode] = useState<string>(cPostalCode);
    const [tel, setTel] = useState<string>(cTel);
    const [picture, setPicture] = useState<string>(cPicture);
    const [error, setError] = useState<string>('');

    const handleUpdateCampground = async () => {
        try {
            if (name.length > 50) {
                setError("Name cannot be more than 50 characters");
                return;
            }
            if (postalCode.length > 5) {
                setError("Postal code cannot be more than 5 digits");
                return
            }
            await HandleUpdateCampground(cid, name, address, district, province, postalCode, tel, picture, token);
        } catch (err) {
            setError("Updated Failed")
            console.log(err)
        }
    }

    return (
        <div className={`${styles.campgroundFont} w-[600px] h-[70%] bg-white rounded-[10px] opacity-60
            text-black bg-zinc-100 w-full pt-[30px]`}>
                <div className="text-black text-[2vw] text-center ">
                    Update This Campground
                </div>
            <form action={handleUpdateCampground} className="relative opacity-100 mt-[25px] mr-[40px]">

                <div className="relative opacity-100 ml-[20px] mt-[25px] mr-[40px]">
                    <div className="flex items-center w-full my-2">
                        <div className="w-full">
                            <label htmlFor="name" className="ml-[15px] block text-[1.25vw] w-full opacity-60">
                                Campground Name
                            </label>
                            <input type="text" required id="name" name="name" placeholder="Insert Campground Name"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                            ml-[30px] focus:outline-none indent-3 w-full focus:border-blue-400 transition duration-300" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center w-full my-2">
                        <div className="w-full">
                            <label htmlFor="address" className="ml-[15px] block text-[1.25vw] w-full opacity-60">
                                Address
                            </label>
                            <input type="text" required id="address" name="address" placeholder="Insert Address"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                            ml-[30px] focus:outline-none indent-3 focus:border-blue-400 transition duration-300"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center w-full my-2">
                        <div className="w-full">
                            <label htmlFor="district" className="ml-[15px] block text-[1.25vw] w-full opacity-60">
                                District
                            </label>
                            <input type="text" required id="district" name="district" placeholder="Insert District"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                            ml-[30px] focus:outline-none indent-3 focus:border-blue-400 transition duration-300"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center w-full my-2">
                        <div className="w-full">
                            <label htmlFor="province" className="ml-[15px] block text-[1.25vw] w-full opacity-60">
                                Province
                            </label>
                            <input type="text" required id="province" name="province" placeholder="Insert Province"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                            ml-[30px] focus:outline-none indent-3 focus:border-blue-400 transition duration-300"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center w-full my-2">
                        <div className="w-full">
                            <label htmlFor="postalCode" className="ml-[15px] block text-[1.25vw] w-full opacity-60">
                            Postal Code
                            </label>
                            <input type="text" required id="postalCode" name="postalCode" placeholder="Insert Postal Code"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                            ml-[30px] focus:outline-none indent-3 focus:border-blue-400 transition duration-300"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center w-full my-2">
                        <div className="w-full">
                            <label htmlFor="tel" className="ml-[15px] block text-[1.25vw] w-full opacity-60">
                                Tel.
                            </label>
                            <input type="text" required id="tel" name="tel" placeholder="Insert Tels"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                            ml-[30px] focus:outline-none indent-3 focus:border-blue-400 transition duration-300"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}/>
                        </div>
                    </div>

                    <div className="flex items-center w-full my-2">
                        <div className="w-full">
                            <label htmlFor="picture" className="ml-[15px] block text-[1.25vw] w-full opacity-60">
                                Picture
                            </label>
                            <input type="text" required id="picture" name="picture" placeholder="Insert Picture URI"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
                            ml-[30px] focus:outline-none indent-3 focus:border-blue-400 transition duration-300"
                            value={picture}
                            onChange={(e) => setPicture(e.target.value)}/>
                        </div>
                    </div>

                    <div className="py-[40px] space-x-[20px] flex flex-col items-center">
                        <button
                            type="submit"
                            className="opacity-100 rounded-full w-full text-[20px] bg-[#ffa900] text-white ring-slate-600 p-[5px] py-[10px] 
                            duration-300 hover:bg-indigo-800">
                            Update This Campground
                        </button>
                    </div>
                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded">
                            {error}
                        </div>
                    )}
                </div>
            </form>
        </div>
//         <form action={handleUpdateCampground} className="flex flex-col items-center justify-center w-full h-full
// 		border-[#21628d] hover:border-[#3ce7e4] rounded-lg space-y-2 px-10 py-5 mt-10 border-4 bg-white
//          transform transition-colors duration-300">
//             <div className="text-xl text-gray-700 font-bold">Update Campground Form</div>

//             <div className="flex items-center w-full my-2">
//                 <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="name">Campground name</label>
//                 <input type="text" required id="name" name="name" placeholder="Campground name"
//                     className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
//                     focus:outline-none focus:border-blue-400 transition duration-300"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)} />
//             </div>
//             <div className="flex items-center w-full my-2">
//                 <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="address">Address</label>
//                 <input type="text" required id="address" name="address" placeholder="Address"
//                     className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
//                     focus:outline-none focus:border-blue-400 transition duration-300"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)} />
//             </div>
//             <div className="flex items-center w-full my-2">
//                 <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="district">District</label>
//                 <input type="text" required id="district" name="district" placeholder="District"
//                     className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
//                     focus:outline-none focus:border-blue-400 transition duration-300"
//                     value={district}
//                     onChange={(e) => setDistrict(e.target.value)} />
//             </div>
//             <div className="flex items-center w-full my-2">
//                 <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="province">Province</label>
//                 <input type="text" required id="province" name="province" placeholder="Province"
//                     className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
//                     focus:outline-none focus:border-blue-400 transition duration-300"
//                     value={province}
//                     onChange={(e) => setProvince(e.target.value)} />
//             </div>
//             <div className="flex items-center w-full my-2">
//                 <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="postalCode">Postal Code</label>
//                 <input type="text" required id="postalCode" name="postalCode" placeholder="Postal Code"
//                     className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
//                     focus:outline-none focus:border-blue-400 transition duration-300"
//                     value={postalCode}
//                     onChange={(e) => setPostalCode(e.target.value)} />
//             </div>
//             <div className="flex items-center w-full my-2">
//                 <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="tel">Tel.</label>
//                 <input type="text" required id="tel" name="tel" placeholder="Tel."
//                     className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
//                     focus:outline-none focus:border-blue-400 transition duration-300"
//                     value={tel}
//                     onChange={(e) => setTel(e.target.value)} />
//             </div>
//             <div className="flex items-center w-full my-2">
//                 <label className="w-1/4 block text-gray-700 pr-2 font-semibold text-[20px]" htmlFor="picture">Picture</label>
//                 <input type="text" required id="picture" name="picture" placeholder="Google drive URL"
//                     className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 
//                     focus:outline-none focus:border-blue-400 transition duration-300"
//                     value={picture}
//                     onChange={(e) => setPicture(e.target.value)} />
//             </div>
//             <div className="flex items-center w-full my-2">
//                 <button type="submit" className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
//   font-semibold py-2 px-2 rounded-lg z-3
//   transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent w-full">
//                     Update Campground
//                 </button>
//             </div>
//             {error && (
//                 <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded">
//                     {error}
//                 </div>
//             )}
//         </form>
    )
}