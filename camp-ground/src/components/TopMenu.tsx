import TopMenuItem from "./TopMenuItem";
import Image from "next/image";
import styles from "@/styles/FontPage.module.css"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function TopMenu(){
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;
    const profile = session ? await getUserProfile(session.user.token) : null;
    
    return (
        <div className={`${styles.FiraSans} flex justify-start fixed flex-row h-[110px] 
        top-0 right-0 left-0 z-30 items-center text-[20px]
         text-white font-normal w-screen`}>
            <Image src="/images/logo.png"
            className="ml-[10%] w-[80px] h-[80px]"
            alt="logo"
            width={1000}
            height={1000}/>
            <div className="flex flex-row justify-around w-[40%]">
                <TopMenuItem pageRef="/" title="Home"/>
                <TopMenuItem pageRef="/mybooking" title="My Booking"/>
                <TopMenuItem pageRef="/information" title="Information"/>
                { profile?.data.role == "admin" ?
                <TopMenuItem pageRef="/history" title="History"/>
                : null
                }
            </div>
            <div className="w-[25%]">

            </div>
            <div>
            {
                        session ? 
                        <TopMenuItem pageRef="/api/auth/signout" 
                        title={`Sign-Out of ${session.user?.name}`}/>
                        : <TopMenuItem pageRef="/api/auth/signin" title="Sign in"/>
                }
            </div>
              
        </div>
    )
}