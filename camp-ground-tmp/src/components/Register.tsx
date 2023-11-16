'use client'
import { MenuItem, Select } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { RegisterUser } from "interfaces";
import { registerUser } from "@/redux/features/registerSlice";

export default function RegisterForm(){
    const [name,setName] = useState<string>("");    
    const [email,setEmail] = useState<string>("");
    const [tel,setTel] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>();

    const registerForUser = () => {
        if (name && email && tel && password){
            const user: RegisterUser = {
                name: name,
                email: email,
                tel: tel,
                password: password
            }
            dispatch(registerUser(user));
        }
    }

    return (
        <div className="text-black mt-[60px] bg-slate-600 p-[10px] flex justify-center h-screen 
        w-screen items-center">
            <div className="w-[850px] h-[550px] bg-slate-200 rounded-2xl 
            shadow-xl border-slate-400 border-[10px]">
                <div className="mt-[20px] text-[40px] text-center font-bold flex justify-center">
                    <h1 className="mt-[20px]">Register</h1>
                </div>
                <form action="">
                    <div className="text-[20px] ml-[60px]">
                        <div className="flex pt-[20px] space-x-[20px]">
                            {/* First Name */}
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="name" className="rounded-lg indent-2 
                            ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]" placeholder="Your First Name"
                            value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            {/* Email */}
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" className="rounded-lg indent-2 
                            ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]" placeholder="Your Email"
                            value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>

                        <div className="pt-[30px] space-x-[20px] flex items-center">
                            {/* Telephone */}
                            <label htmlFor="tel">tele</label>
                            <input type="tel" name="tel" placeholder="Your Tel" 
                            pattern="[0]{1}[0-9]{9}"
                            className="rounded-lg indent-2 ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]"
                            value={tel} onChange={(e)=>{setTel(e.target.value)}}/>
                        </div>

                        <div className="pt-[20px] space-x-[20px] flex items-center">
                            {/* Password */}
                            <label htmlFor="password">password</label>
                            <input type="password" name="password" placeholder="Your password" className="rounded-lg indent-2 
                            ring-1 ring-gray-600 bg-neutral-100 hover:bg-white ml-[20px]"
                            value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className="pt-[40px] space-x-[20px]">
                            {/* Submit Button */}
                            <button type="submit" className="rounded-xl bg-slate-100 text-[20px] ring-2
                            ring-slate-600 hover:bg-white p-[5px] hover:scale-[1.15] duration-300">
                                Booking
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}