import CampgroundCatalog from "@/components/CampgroundCatalog";
import Image from "next/image";
import getCampgrounds from "@/libs/getCampgrounds";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import styles from "@/styles/FontPage.module.css"

export default async function CampGround() {
  const campgrounds = getCampgrounds();

  return (
    <main>
        <div>
            <Suspense fallback={
                    <div className="w-screen h-screen"> 
                    <p className={`${styles.allFont} relative text-[40px] font-bold text-center mt-[130px]`}>Loading...</p>
                    <LinearProgress />
                    </div>
                    }>
                    <div className={`${styles.allFont} text-center relative 
                        text-black mt-[130px] text-[80px]`}>
                            <h1>CAMPING INFO</h1>
                    </div>
                    <div className="text-center mx-[5%] flex justify-start 
                    flex-row flex-wrap w-screen h-screen">
                        <CampgroundCatalog campJson={campgrounds}/>
                    </div>
            </Suspense>
        </div>
    </main>
  )
}
