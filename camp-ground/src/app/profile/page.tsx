import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export default async function Profile() {
    revalidatePath('/profile')
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.token) return null
    const profile = session ? await getUserProfile(session.user.token) : null;
    var createdAt = new Date(profile.data.createdAt)

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                <div className="w-[400px] h-[400px]">
                    <Image
                        src="/images/signin.jpg"
                        alt="Profile Image"
                        width={1000}
                        height={1000}
                        className="rounded-lg border-4 border-white w-full"
                    />
                </div>
            </div>
            <div className="w-[90%] max-w-xl bg-slate-900 p-6 rounded-lg mt-6 md:ml-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">User Profile</h1>
                <div className="text-lg space-y-4">
                    <div><span className="font-bold pr-3">Name: </span> {profile.data.name}</div>
                    <div><span className="font-bold pr-3">Email: </span> {profile.data.email}</div>
                    <div><span className="font-bold pr-10">Tel: </span> {profile.data.tel}</div>
                    <div><span className="font-bold">Member Since: </span> {createdAt.toDateString()}</div>
                </div>
            </div>

        </div>

    )
}