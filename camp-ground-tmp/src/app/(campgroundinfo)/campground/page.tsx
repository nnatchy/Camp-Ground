import CampGroundCatalog from "@/components/campgroundCatalog";
import { FaHeart } from "react-icons/fa";
import getCampgrounds from "@/libs/getCampgrounds";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddCampGroundForm from "@/components/admin/AddCampGroundForm";
import UpdateCampgroundForm from "@/components/admin/UpdateCampGroundFormHard";

export default async function CampGround() {
  const campgrounds = getCampgrounds();
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null
  const profile = session ? await getUserProfile(session.user.token) : null;
  return (
    <main className="text-center p-5">
      <div className="text-[30px] font-bold flex items-center justify-center mt-[50px] pt-[20px]">
        <span className="mr-3">All Campgrounds</span>
        <span>
          <FaHeart />
        </span>
      </div>
      <Suspense fallback={
        <div>
          <p className="text-xl font-bold">Loading...</p>
          <LinearProgress />
        </div>
      }>
        <div className="flex flex-wrap justify-center">
          <CampGroundCatalog campJson={campgrounds} />
        </div>
        {
          (profile?.data.role == "admin") ?
            <div>
              <AddCampGroundForm />
              <UpdateCampgroundForm campJson={campgrounds} />
            </div>
            :
            null
        }
      </Suspense>

    </main>
  )
}
