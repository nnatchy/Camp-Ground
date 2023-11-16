'use client'
import Image from "next/image"
import styles from "@/styles/FontPage.module.css"
import { useState } from "react"

interface Props{
    picture:string
    name:string
    onRating?:Function
    ratingList?:Map<string,number>
}

export default function CardItem({picture,name,onRating,ratingList}:Props){

    function onCardAction(event:React.SyntheticEvent){
        if (event.type == "mouseover"){
            event.currentTarget.classList.remove("shadow-lg");
            event.currentTarget.classList.add("shadow-2xl");
            event.currentTarget.classList.remove("bg-white");
            event.currentTarget.classList.add("bg-neutral-200");
            event.currentTarget.classList.remove("mt-[20px]");
            event.currentTarget.classList.add("mt-[50px]");
        } else {
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.add("shadow-lg");
            event.currentTarget.classList.remove("bg-neutral-200");
            event.currentTarget.classList.add("bg-white");
            event.currentTarget.classList.remove("mt-[50px]");
            event.currentTarget.classList.add("mt-[20px]");
        }
    }

    return (
        <div className="w-[500px] h-[650px] relative shadow-lg shadow-zinc-100 bg-white 
        rounded-2xl mt-[20px] mb-[100px] hover:scale-[1.05] duration-300"
        onMouseOver={(e)=>onCardAction(e)}
        onMouseOut={(e)=>onCardAction(e)}>
            <div className="w-[100%] h-[60%] relative">
                <Image className="rounded-t-xl"
                src={picture}
                alt={name}
                fill={true}/>
            </div>
            <div className={`${styles.font} text-center mt-[20px] text-[30px] w-[100%] h-[20%] font-bold`}>
                {name}
            </div>
            <div className="flex justify-end mr-[20px] mt-[20px]">
                    <div className="flex space-x-[10px] bg-slate-300 py-[5px] px-[10px] rounded-xl 
                    hover:scale-[1.1] duration-300 items-center">
                        <h1 className={`${styles.font} text-[25px] font-bold`}>Rating</h1>
                </div>
            </div>    
        </div>
    )
}