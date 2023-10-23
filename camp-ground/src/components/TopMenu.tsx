import TopMenuItem from "./TopMenuItem";
import Link from "next/link"
import Image from "next/image";
import styles from "@/styles/TopMenu.module.css"

export default function TopMenu(){
    return (
        <div className="flex justify-start fixed flex-row h-20 
        top-0 right-0 left-0 z-30 items-center text-[25px] 
        opacity-80 bg-black text-white">
            <Image src="/images/logo.png"
            className="ml-[10px]"
            alt="logo"
            width={70}
            height={70}/>
            <div className="ml-[60%]">
                <TopMenuItem pageRef="/" title="Home"/>
                <TopMenuItem pageRef="/booking" title="Booking"/>
                <TopMenuItem pageRef="/booking" title="About us"/>
                <TopMenuItem pageRef="/booking" title="Sign in"/>
            </div>
        </div>
    )
}