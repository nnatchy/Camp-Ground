'use client'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

interface Props {
    id:string
    token:string
    bookingDate:Date
    checkoutDate:Date
    user:string
}

export default function UpdateCampGroundForm({id,token,bookingDate,checkoutDate,user}: Props) {
    // const handleUpdateCampground = async (event: FormEvent<HTMLFormElement>) => {
    //     try {
    //         const res = await updateCampground(cid, name, address, district, province, postalCode, tel, picture, token);
    //         console.log('Update Campground successful');
    //         router.push(`/information/${cid}`);
    //     } catch (err) {
    //         alert('Update Failed: Not match the constraint')
    //         console.log("THERE's ERROR")
    //         return false;
    //     }
    // }


    return (
        <form>
            <div className="relative opacity-100 ml-[40px] mt-[25px] mr-[40px]">
                <div>
                    <label htmlFor="name" className="ml-[15px] block text-[12px] w-full opacity-60">
                        Traveler Name
                    </label>
                    <input className="w-full mt-[5px] bg-white text-[15px] p-[10px] 
                        rounded-full indent-2 bg-white"
                        type="text" id="name" placeholder="name"  readOnly />
                    </div>

                    <div className="mt-[20px]">
                        <label htmlFor="campgroundName" className="ml-[15px] block text-[12px] w-full opacity-60">
                            Campground Name
                        </label>
                    <input className="w-full mt-[5px] bg-white text-[15px] p-[10px] 
                    rounded-full indent-2 bg-white"
                    type="text" id="campgroundName" placeholder="Camp ground name" readOnly />
                    </div>

                    <div className="flex flex-row justify-start flex-wrap mt-[20px]">
                        <div>
                            <label htmlFor="checkInDate" className="ml-[15px] block text-[12px] w-full 
                            opacity-60">
                                Check In Date
                            </label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker className="mt-[5px] bg-white"/>
                            </LocalizationProvider>
                            </div>
                    </div>

                    <div className="w-full mt-[20px]">
                        <label htmlFor="checkOutDate" className="ml-[15px] block text-[12px] w-full 
                            opacity-60">
                            Check Out Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="mt-[5px] bg-white"/>
                        </LocalizationProvider>
                    </div>


                    <div className="pt-[40px] space-x-[20px] mt-[20px]">
                        <button type="submit" className="opacity-100 rounded-full w-full text-[20px] bg-[#ffa900] text-white
                        ring-slate-600 p-[5px] py-[10px] duration-300 hover:bg-indigo-800">
                            Booking Campground
                        </button>
                    </div>
                </div>
            </form>
    )
}