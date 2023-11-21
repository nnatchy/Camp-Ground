'use client'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { UpdateBookingAction } from "@/action/UpdateBookingAction";

export default function UpdateBookingForm({ token }: { token: string }) {
    const [id, setId] = useState("");
    const [checkInDate, setCheckInDate] = useState<Dayjs | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Dayjs | null>(null);
    const [error, setError] = useState<string>('')

    const handleUpdateBooking = async () => {
        try {
            const startDate = dayjs(checkInDate);
            const endDate = dayjs(checkOutDate);
            const differenceInDays = endDate.diff(startDate, 'day');

            if (differenceInDays > 3) {
                setError("The booking duration can't be more than 3 days.");
                return;
            }

            await UpdateBookingAction(
                id,
                startDate.format('YYYY/MM/DD'),
                endDate.format('YYYY/MM/DD'),
                token
            );
            setError('');
            console.log("Update booking successful");
        } catch (err) {
            setError('Update error');
            console.log("Err: ", err);
        }
    };

    return (
        <div>
            <form action={handleUpdateBooking} className="flex flex-col items-center justify-center w-screen 
            border-[#21628d] hover:border-[#3ce7e4] rounded-lg space-y-2 px-5 py-5 mt-10 border-4 bg-white
            transform transition-colors duration-300 text-black">
                <div className="text-[30px] font-bold">Update Booking Form</div>
                <div className="w-full">
                    <label className="w-1/4 block pr-2 font-semibold text-[20px]" htmlFor="name">
                        Insert the booking_id that you want to edit
                    </label>
                    <input type="text" required id="name" name="name" placeholder="booking_id"
                        className="bg-white border-2 border-gray-200 rounded w-[50%] p-2 text-gray-700 
                        focus:outline-none focus:border-blue-400 transition duration-300"
                        value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="flex flex-row justify-start">
                    <div className="w-full">
                        <label htmlFor="checkOutDate" className="w-1/4 block pr-2 font-semibold text-[20px]">
                            `                   New Check In Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="mt-[5px] bg-white" value={checkInDate}
                                onChange={(e) => { setCheckInDate(e) }} />
                        </LocalizationProvider>
                    </div>

                    <div className="w-full">
                        <label htmlFor="checkOutDate" className="w-1/4 block pr-2 font-semibold text-[20px]">
                            `                   New Check Out Date
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="mt-[5px] bg-white" value={checkInDate}
                                onChange={(e) => { setCheckOutDate(e) }} />
                        </LocalizationProvider>
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
                            font-semibold py-2 px-2 rounded-lg z-3
                            transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent w-full">
                        Edit Your Booking Schedule
                    </button>
                </div>
                {error && (
                    <div className="bg-red-500 text-white w-fit text-[20px] py-1 px-3 rounded">
                        {error}
                    </div>
                )}
            </form>
        </div>
    )
}