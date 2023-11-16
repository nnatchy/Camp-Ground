import styles from "@/styles/FontPage.module.css"

export default function BookingForm(){

    return (
        <div className={`${styles.font} bg-slate-600 rounded-lg p-[10px] flex justify-center items-center h-screen w-screen`}>
            <div className={`${styles.allFont} w-[850px] h-[550px] bg-slate-200 rounded-2xl 
            shadow-xl border-slate-400 border-[10px] mt-[20px]`}>
                <div className="mt-[20px] text-[40px] text-center font-bold flex justify-center">
                    <h1 className="mt-[20px]">Campground Booking Form</h1>
                </div>

                <div className="text-[20px] ml-[60px]">

                    <div className="flex pt-[20px] space-x-[20px]">
                        {/* First Name */}
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="name" className="rounded-lg indent-2 
                        ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]" placeholder="Your First Name"/>
                        {/* Last Name */}
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="name" className="rounded-lg indent-2 
                        ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]" placeholder="Your Last Name"/>
                    </div>

                    <div className="pt-[30px] space-x-[20px] flex items-center">
                        {/* ID Card */}
                        <label htmlFor="idCard">Identification Card</label>
                        <input type="text" name="idCard" placeholder="Your ID Card" className="rounded-lg indent-2 
                        ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]"/>
                    </div>

                    <div className="pt-[20px] space-x-[20px] flex items-center">
                        {/* Hospital Selection */}
                        <label htmlFor="hospital">Hospital</label>
                        <input type="text" name="idCard" placeholder="Your ID Card" className="rounded-lg indent-2 
                        ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]"/>
                    </div>

                    <div className="pt-[40px] space-x-[20px]">
                        {/* Submit Button */}
                        <button type="submit" className={`${styles.font} rounded-xl bg-slate-100 text-[20px] ring-2
                        ring-slate-600 hover:bg-white p-[5px] hover:scale-[1.15] duration-300`}>
                            Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}