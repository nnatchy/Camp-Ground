import Image from "next/image";
import getCampground from "@/libs/getCampground";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UpdateCampGroundForm from "@/components/admin/UpdateCampGroundForm";
import DeleteCampgroundForm from "@/components/admin/DeleteCampGroundForm";
import styles from "@/styles/FontPage.module.css"
import { revalidateTag } from "next/cache";

export default async function CampgroundDetailPage({
  params,
}: {
  params: { cid: string };
}) {
  
  revalidateTag(`/campground/${params.cid}`)
  const campgroundDetail = await getCampground(params.cid);
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null
  const profile = session ? await getUserProfile(session.user.token) : null;
  return (
    <main className={`${styles.campgroundFont} p-5 mt-[50px]`}>
      <div className="flex mt-[60px]">
        <Image
          src={campgroundDetail.data.picture}
          alt="Campground Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[40%] border-4 border-white"
        />
        <div className="flex-grow flex flex-col justify-start items-center">
          <div className="text-[30px] lg:text-[40px] mx-5 mb-5 font-bold">
            {campgroundDetail.data.name}
          </div>
          <div className="text-[20px] lg:text-[30px] mx-5">
            <span className="font-bold pr-4">Location :</span>
            <span>{campgroundDetail.data.address} 
            <span>{campgroundDetail.data.province}, {campgroundDetail.data.district}</span></span>
            <div className="mt-3 text-[20px] lg:text-[30px]">
              <span className="font-bold pr-4">Postal Code : </span>
              <span>{campgroundDetail.data.postalcode}</span>
            </div>
            <div className="mt-3 text-[20px] lg:text-[30px]">
              <span className="font-bold pr-4">Tel : </span>
              <span>{campgroundDetail.data.tel}</span>
            </div>
          </div>
        </div>
      </div>
      {
        (profile?.data.role == "admin") ?
          <div>
            <UpdateCampGroundForm cid={params.cid}
            cName={campgroundDetail.data.name}
            cProvince={campgroundDetail.data.province}
            cDistrict={campgroundDetail.data.district}
            cPostalCode={campgroundDetail.data.postalcode}
            cTel={campgroundDetail.data.tel}
            cPicture={campgroundDetail.data.picture}
            token={session.user.token} cAddress={campgroundDetail.data.address} />
            <DeleteCampgroundForm cid={params.cid} token={session.user.token} />
          </div>
          :
          null
      }
    </main>
  );
}
