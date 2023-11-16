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
            <div className="fixed inset-0 bg-cover bg-center z-0">
                        <Image src="/images/informationBg.jpg"
                        className="opacity-80"
                        alt="Error For Load Information Background"
                        fill={true}/>
            </div>
            <Suspense fallback={
                    <div>
                    <p className="text-xl font-bold text-center mt-[130px]">Loading...</p>
                    <LinearProgress />
                    </div>
                    }>
                    <div className={`${styles.allFont} text-center relative 
                        text-white mt-[130px] text-[80px]`}>
                            <h1>CAMPING INFO</h1>
                    </div>
                    <div className="text-center mx-[5%] flex justify-start 
                    flex-row flex-wrap">
                        <CampgroundCatalog campJson={campgrounds}/>
                    </div>
            </Suspense>
        </div>
        {/* <div>
            <Image  className="fixed inset-0 bg-cover bg-center z-0 opacity-80" 
            src="/images/informationBg.jpg"
            alt="Error For Load Information Background"
            fill={true}/>
            <div className="mt-[100px]">
                <div className={`${styles.allFont} mr-3 text-[40px] text-center`}>
                    CAMPING INFO
                </div>
                <Suspense fallback={
                    <div>
                    <p className="text-xl font-bold">Loading...</p>
                    <LinearProgress />
                    </div>
                    }>
                    <div className="flex flex-wrap justify-center">
                        <CampgroundCatalog campJson={campgrounds}/>
                    </div>
                </Suspense>
            </div>
        </div> */}
    </main>
  )
}
