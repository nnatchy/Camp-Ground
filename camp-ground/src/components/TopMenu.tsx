import TopMenuItem from "./TopMenuItem";
import Link from "next/link"
import Image from "next/image";
import styles from "@/styles/TopMenu.module.css"

export default function TopMenu(){
    return (
        <div className={`${styles.allFont} flex justify-between fixed flex-row h-[110px] 
        top-0 right-0 left-0 z-30 items-center text-[25px] 
        opacity-80 bg-black text-white font-normal`}>
            <Image src="/images/logo.png"
            className="ml-[10px]"
            alt="logo"
            width={98}
            height={74}/>
            <div className="flex flex-row justify-around">
                <TopMenuItem pageRef="/" title="Home"/>
                <TopMenuItem pageRef="/about" title="About"/>
                <TopMenuItem pageRef="/booking" title="Booking"/>
                <TopMenuItem pageRef="/information" title="Information"/>
            </div>
            <div className="flex relative transition-transform 
            transform hover:scale-[1.155] duration-300">
                <Image src="/images/signin.jpg"
                className="mr-[20px] rounded-full backdrop-brightness-200"
                alt="signin"
                width={70}
                height={40}/>
            </div>
        </div>
    )
}