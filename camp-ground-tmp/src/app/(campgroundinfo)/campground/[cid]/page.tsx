import Image from "next/image";
import getCampground from "@/libs/getCampground";
import Link from "next/link";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UpdateCampGroundForm from "@/components/admin/UpdateCampGroundFormHard";
import DeleteCampgroundForm from "@/components/admin/UpdateCampGroundFormHard";

export default async function CampgroundDetailPage({
  params,
}: {
  params: { cid: string };
}) {

  const campgroundDetail = await getCampground(params.cid);
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null
  const profile = session ? await getUserProfile(session.user.token) : null;

  return (
    <main className="p-5">
      <div className="text-center flex mt-[60px]">
        <Image
          src={campgroundDetail.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[40%] border-4 border-white"
        />
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="text-[50px] mx-5 mb-10 font-bold text-white ">
            {campgroundDetail.data.name}
          </div>
          <div className="text-[25px] mx-5 text-white">
            <span className="font-bold pr-4 text-[30px]">Location:</span>
            <span>{campgroundDetail.data.address} <span>{campgroundDetail.data.province}, {campgroundDetail.data.postalcode}</span></span>
            <div className="mt-6 text-[25px]">
              <span className="font-bold pr-4 text-[30px]">Tel: </span>
              <span>{campgroundDetail.data.tel}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 pt-10 justify-center text-[25px]">
        <Link href={`/booking?id=${params.cid}&name=${campgroundDetail.data.name}`}>
          <button className="bg-white text-cyan-600 border-2 border-cyan-600 border-opacity-100
  font-semibold py-2 px-10 rounded-lg z-3
  transform transition-colors duration-300 hover:bg-cyan-600 hover:text-white hover:border-transparent">
            Booking
          </button>
        </Link>
      </div>

      {
        (profile?.data.role == "admin") ?
          <div>
            <UpdateCampGroundForm />
            <DeleteCampgroundForm />
          </div>
          :
          null
      }
    </main>
  );
}
