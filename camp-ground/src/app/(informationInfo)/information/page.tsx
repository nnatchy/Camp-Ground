import CampgroundCatalog from "@/components/CampgroundCatalog";
import getCampgrounds from "@/libs/getCampgrounds";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import styles from "@/styles/FontPage.module.css"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import AddCampGroundForm from "@/components/admin/AddCampGroundForm";
import UpdateCampGroundFormHard from "@/components/admin/UpdateCampGroundFormHard";

export default async function CampGround() {
  const campgrounds = getCampgrounds();
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = session ? await getUserProfile(session.user?.token) : null;

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
              <div className="flex flex-wrap justify-center">
                <CampgroundCatalog campJson={campgrounds} />
              </div>
              {
                (profile?.data.role == "admin") ?
                  <div className="my-[40px] mx-[20px]">
                    <AddCampGroundForm/>
                    <UpdateCampGroundFormHard campJson={campgrounds}/>
                  </div>
                  :
                  null
              } 
            </Suspense>
        </div>
    </main>
  )
}
