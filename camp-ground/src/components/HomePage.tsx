'use client'
import Image from "next/image";
import styles from "@/styles/FontPage.module.css"
import { useEffect, useState } from "react";

export default function HomePage(){
    const[index,setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIndex(index+1);
        }, 3000);

        return () => clearTimeout(timer);
      }, [index]);

    const covers = [
        "/images/banner.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
        "/images/banner4.jpg",
        "/images/banner5.jpg"
    ];

    return (
        <div className={`${styles.allFont} flex justify-center items-center 
        relative w-screen h-screen text-white block`}>
            <Image src="/images/informationBg.jpg" 
            className="blur-sm saturate-100 opacity-60"
            alt="Error For Load Home Background" 
            fill={true}/>
            <div className="relative">
                <div className=" flex flex-row justify-center"> 
                    <h1 className="text-[55px]">CAMP GROUND</h1> 
                </div> 
                <div className={`${styles.allFont} flex flex-row justify-center text-[22px] 
                mt-[-20px] items-center`}>
                    <span className="mb-[22px] mr-[10px]">__</span>
                    <span>Your Gateway to Nature's Playground</span>
                    <span className="mb-[22px] ml-[10px]">__</span>
                </div>
                <div className="mt-[25px] flex flex-row items-center">
                    <Image src={covers[index%5]}
                    alt="Banner"
                    className="w-[680px] h-[280px] rounded-[30px] flex flex-row ml-[10px]"
                    width={1000}
                    height={1000}/>
                </div>
            </div>
        </div>
    )
}