'use client'
import Image from "next/image";
import styles from "@/styles/HomePage.module.css"
import { useState,useEffect } from "react";

export default function HomePage(){
    const covers = [
        "/images/banner.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
        "/images/banner4.jpg",
    ];
    const [index,setIndex] = useState(0);

    useEffect(() => {
        // Use a setTimeout to change the state after 5 seconds
        const timer = setTimeout(() => {
          setIndex((index+1)%4);
        }, 5000); // 5000 milliseconds = 5 seconds
    
        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
      }, [index]);

    return (
        <div className={`${styles.allFont} flex justify-center items-center relative w-screen h-screen`}>
            <Image src={covers[index]}
            alt="vaccine banner" 
            fill={true}/>
            <div>
                <Image src="/images/circle.png"
                alt="circle"
                width={100}
                height={100}/>
            </div>
        </div>
    )
}