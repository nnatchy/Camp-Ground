import TopMenuItem from "./TopMenuItem";
import Link from "next/link"
import Image from "next/image";
import styles from "@/styles/FontPage.module.css"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu(){
    const session = await getServerSession(authOptions)
    
    return (
        <div className={`${styles.allFont} flex justify-between fixed flex-row h-[110px] 
        top-0 right-0 left-0 z-30 items-center text-[10px] lg:text-[25px] md:text-[20px] sm:text-[15px]
        opacity-80 bg-black text-white font-normal`}>
            <Image src="/images/logo.png"
            className="ml-[10px]"
            alt="logo"
            width={98}
            height={74}/>
            <div className="flex flex-row justify-around">
                <TopMenuItem pageRef="/" title="Home"/>
                <TopMenuItem pageRef="/mybooking" title="My Booking"/>
                <TopMenuItem pageRef="/information" title="Information"/>
                {
                        session ? 
                        <TopMenuItem pageRef="/api/auth/signout" 
                        title={`Sign-Out of ${session.user?.name}`}/>
                        : <TopMenuItem pageRef="/api/auth/signin" title="Sign in"/>
                }
            </div>
            <div className="flex relative transition-transform 
            transform hover:scale-[1.155] duration-300">
                {/* <Image src="/images/signin.jpg"
                className="mr-[20px] rounded-full backdrop-brightness-200"
                alt="signin"
                width={70}
                height={40}/> */}
            </div>
        </div>
    )
}