import Image from "next/image";
import styles from "@/styles/InformationPage.module.css"
import Card from "./Card";

export default function InformationPage(){
    return (
        <div className="flex justify-start w-screen h-screen">
            <Image src="/images/informationBg.jpg"
            alt="Error For Load Information Background"
            fill={true}/>
            <div className="w-screen">
                <div className={`${styles.allFont} text-center relative 
                text-white mt-[130px] text-[64px]`}>
                    <h1>CAMPING INFO</h1>
                </div>
                <Card/>
            </div>
        </div>
    )
}