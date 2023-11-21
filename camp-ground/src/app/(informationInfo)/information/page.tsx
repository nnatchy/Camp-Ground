import CampgroundCatalog from "@/components/CampgroundCatalog";
import getCampgrounds from "@/libs/getCampgrounds";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import styles from "@/styles/FontPage.module.css"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import CreateCampGroundForm from "@/components/admin/CreateCampGroundForm";
import Link from "next/link";
import Image from "next/image";
import PromoteCard from "@/components/PromoteCard";

export default async function CampGround() {
  const campgrounds = await getCampgrounds();
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.token) return null;
  const profile = session ? await getUserProfile(session.user.token) : null;
  console.log("Token:",session.user.token)
  return (
    <main>
        <div>
            <Suspense fallback={
              <div className="w-screen h-screen"> 
                <p className={`${styles.allFont} relative text-[40px] font-bold 
                text-center mt-[130px]`}>Loading...</p>
                <LinearProgress />
              </div>
            }>
              <div>
                <div>
                  <Image className="w-screen h-[120%] rounded-b-3xl"
                  src="/images/informationBg.jpg"
                  alt="Error to down load background"
                  width={1000}
                  height={1000}/>
                </div>
                <div className={`${styles.Roboto} text-center font-bold relative 
               text-white text-[3.5vw] mt-[6%] w-screen`}>
                  <h1>Find Yourself</h1>
                  <h1>Campground Outside 🏕️</h1>
                  <div className = "mt-[20px] text-[1vw] text-gray-100 opacity-80 font-light ">
                    <p>Escape to nature's embrace at our serene campground—where</p>
                    <p>memories are made under starlit skies. </p> 
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-center w-screen mt-[80px] mx-[20px]
                space-x-[70px]">
                  <PromoteCard picture="✨" topic="Traveler-Friendly" detail="Enter your details with ease, 
                  starting with your name. Our user-friendly form 
                  ensures a seamless booking experience."/>
                  <PromoteCard picture="🏞️" topic="Choose Your Spot" detail=" Indicate your preferred campground, 
                  whether it's the peaceful Guncv Pattaya Campground or one of our other scenic locations."/>
                  <PromoteCard picture="📅" topic="Reserve Your Dates" detail="Select your desired dates with our interactive calendar. 
                  Plan your getaway for a day, two days, or extend your adventure for three days of pure bliss."/>
                  <PromoteCard picture="👫" topic="Perfect for Groups" detail="Specify the number of people joining your 
                  camping expedition. Whether solo or with a group of friends, we have the ideal spot for every adventurer."/>
                </div>

                <div className="flex flex-row justify-center mt-[150px]">
                  <Image className="w-[10%] h-[10%]"
                  src="/images/camping.png"
                  alt="Error For load picture"
                  width={1000}
                  height={1000}/>
                </div>
                <div className={`${styles.Roboto} text-center font-bold text-[3.5vw]`}>
                  <h1>Let Explore Campground {`&`}</h1>
                  <h1>Date That You Want</h1>
                </div>
              </div>

              <div className="flex flex-wrap justify-center">
                <CampgroundCatalog campJson={campgrounds} />
              </div>
              {
                (profile?.data.role == "admin") ?
                  <div className="my-[40px] mx-[20px]">
                    <CreateCampGroundForm userToken={session.user.token}/>
                    {/* <UpdateCampGroundFormHard campJson={campgrounds}/> */}
                  </div>
                  :
                  null
              } 
            </Suspense>
        </div>
    </main>
  )
}
