"use client"

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, FormControl, TextField, InputLabel, Button } from "@mui/material"
import { useSearchParams } from "next/navigation";
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { BookingItem } from "../../interfaces"
import { addBooking } from "@/redux/features/bookSlice"
import { AppDispatch } from "@/redux/store"

export default function Register() {
    const urlParams = useSearchParams()
    const hid = urlParams.get('id')
    const hName = urlParams.get('name')

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [cid, setCID] = useState<string>('')
    const [hospitalLocation, setHospitalLocation] = useState<string>(hName ? hName : '')
    const [vaccineDate, setVaccineDate] = useState<Dayjs | null>(null)

    const dispatch = useDispatch<AppDispatch>()

    const createBooking = () => {
        if (name && cid && vaccineDate && hospitalLocation) {
            const item: BookingItem = {
                name: name,
                surname: surname,
                cid: cid,
                hospitalLocation: hospitalLocation,
                vaccineDate: dayjs(vaccineDate).format('YYYY/MM/DD'),
            }
            dispatch(addBooking(item))
        }
    }

    return (
        <div className="bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-300 rounded-lg space-x-5 
        space-y-2 px-8 py-6 flex justify-center shadow-md border-blue-800 border-[5px]">
            <FormControl variant="filled" className="flex justify-center space-y-[30px]" fullWidth>
                <p className="text-center text-black text-4xl font-bold">เเบบฟอร์มการจองรับวัคซีน</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex space-x-5 text-black">
                    <p className="pt-[20px] font-semibold text-[20px]">ชื่อ</p>
                    <TextField type="text" variant="standard" label="First name" value={name} onChange={(value) => { setName(value.target.value); }} />
                    <p className="pt-[20px] font-semibold text-[20px]">นามสกุล</p>
                    <TextField type="text" variant="standard" label="Last name" value={surname} onChange={(value) => { setSurname(value.target.value); }} />
                </div>
                <div className="flex space-x-5 text-black">
                    <label className="pt-[20px] font-semibold text-[20px]">รหัสประจำตัวประชาชน</label>
                    <TextField type="text" variant="standard" label="Citizen ID" className="w-[300px]" value={cid} onChange={(value) => { setCID(value.target.value) }} />
                </div>
                <div className="flex space-x-5 text-black">
                    <p className="pt-[20px] font-semibold text-[20px]">โรงพยาบาล</p>
                    <FormControl>
                        <InputLabel className="pr-5">Hospital</InputLabel>
                        <Select variant="standard" name="location" id="location" label="Hospital" className="h-[2em] w-[250px]"
                            value={hospitalLocation} onChange={(value) => { setHospitalLocation(value.target.value); }}>
                            <MenuItem value="Chulalongkorn Hospital"> Chulalongkorn Hospital</MenuItem>
                            <MenuItem value="Rajavithi Hospital"> Rajavithi Hospital</MenuItem>
                            <MenuItem value="Thammasat University Hospital"> Thammasat University Hospital</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="flex space-x-5 text-black">
                    <p className="pt-[20px] font-semibold text-[20px]">วันที่ต้องการรับวัคซีน</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-white w-[200px] rounded-lg" value={vaccineDate} onChange={(value) => { setVaccineDate(value) }} />
                    </LocalizationProvider>
                </div>
                <Button variant="contained" color="success" className="bg-emerald-600 h-[50px] rounded-lg w-full" onClick={createBooking}>
                    <span className="text-lg font-bold text-[20px]">Book</span>
                </Button>
            </FormControl>
        </div>
    )
}