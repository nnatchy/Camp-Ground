'use client'
import styles from "@/styles/FontPage.module.css"
import { useState } from "react"

interface Props{
    picture:string
    topic:string
    detail:string
}

export default function PromoteCard({picture,topic,detail}: Props){
    const [more,setMore] = useState(false);

    function onCardAction(event:React.SyntheticEvent){
        if (event.type == "mouseover"){
            event.currentTarget.classList.remove("h-[200px]");
            event.currentTarget.classList.add("h-[400px]");
            setMore(!more);
        } else {
            event.currentTarget.classList.remove("h-[400px]");
            event.currentTarget.classList.add("h-[200px]");
            setMore(!more);
        }
    }

    return (
        <div className={`${styles.campgroundFont} w-[200px] h-[200px] rounded-xl duration-300`}
        onMouseOver={onCardAction}
        onMouseOut={onCardAction}>
            <div className="text-center text-[100px]">
                {picture}
            </div>
            <div className="font-bold text-center text-[18px]">
                {topic}
            </div>
            {
                more?
                <div className="mt-[15px] flex flex-row justify-center text-center flex-wrap h-[180px] mx-[10px]">
                    {detail}
                </div> : null
            }
        </div>
    )
}