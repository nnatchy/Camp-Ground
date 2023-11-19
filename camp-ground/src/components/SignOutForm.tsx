'use client'
import { signOut, getSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SignOut() {
    const router = useRouter();

    const handleSignOut = async () => {
        const session = await getSession();
        if (session) {
            await signOut({ redirect: false });
            router.push('/auth/login');
            // same problem as LogIn
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } router.back();
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Image src="/images/sky.jpg"
            alt="Error to load wallpaper"
            fill={true}/>
            <div className="relative z-20 text-center bg-slate-200 
            rounded-[10px] w-[30%] p-[20px]">
                <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
                <p className="mb-8">Are you sure you want to sign out?</p>
                <button
                    onClick={handleSignOut}
                    className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}