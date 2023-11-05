import Image from "next/image"
import styles from "@/styles/FontPage.module.css"
import CardAction from "./CardAction"

interface Props{
    picture:string
    name:string
    province:string
    country:string
}

export default function CardItem({picture,name,province,country}:Props){
    return (
        <CardAction>
            <Image className="w-[304px] h-[196px] ml-[13px] mt-[15px] rounded-t-[15px]"
            src={picture}
            alt="theCampster"
            width={100}
            height={100}/>

            <div className={`${styles.fontItim} text-[32px] text-white flex justify-center 
            flex-row flex-wrap text-center mt-[10px]`}>
                <h1>{name}</h1>
            </div>

            <div className={`${styles.fontItim} text-[32px] text-white flex justify-start
            flex-row flex-wrap text-center basis-1/2`}>
                <Image className="w-[81px] h-[81px] ml-[20px] mt-[15px] rounded-t-[15px]"
                src="/images/location.png"
                alt="theCampster"
                width={100}
                height={100}/>
                <div className="text-[24px] mt-[20px] ml-[40px] block">
                    <h1>{province}</h1>
                    <h1>{country}</h1>
                </div>
            </div>
        </CardAction>
    )
}