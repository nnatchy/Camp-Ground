import Image from "next/image";
import styles from "@/styles/HomePage.module.css"

export default function HomePage(){
    return (
        <div className={`${styles.allFont} flex justify-center items-center relative w-screen h-screen`}>
            <Image src="/images/banner4.jpg"
            alt="vaccine banner" 
            fill={true}/>
        </div>
    )
}