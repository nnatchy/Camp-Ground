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

export default async function CampGround() {
  const campgrounds = await getCampgrounds();
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.token) return null;
  const profile = session ? await getUserProfile(session.user.token) : null;
  console.log("Token:",session.user.token)
  return (
    <main>
        <div>
            <div className=" bg-slate-100 w-screen h-screen fixed inset-0 bg-cover bg-center z-0">
            </div>
            <Suspense fallback={
              <div className="w-screen h-screen"> 
                <p className={`${styles.allFont} relative text-[40px] font-bold 
                text-center mt-[130px]`}>Loading...</p>
                <LinearProgress />
              </div>
            }>
              <div className={`${styles.allFont} text-center relative 
                          text-black mt-[130px] text-[80px]`}>
                              <h1>CAMPING INFO</h1>
              </div>
              { profile?.data.role == "admin" ?
                <div className="relative text-center text-rose-700 font-bold 
                text-[30px] text-black duration-300 hover:scale-[1.05]">
                  <Link href="/history">
                  View Booking History
                  </Link>
                </div> : null
              }
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
