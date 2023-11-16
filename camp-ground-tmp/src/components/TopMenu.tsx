import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className='flex justify-between'>

            <div className='flex w-full fixed z-[11] justify-end
        bg-gradient-to-l from-blue-950 from-10% via-indigo-600 
        via-60% to-sky-400 to-95%'>
                <div className='flex w-full h-full items-center top-0 z-[12] pt-5 w-full font-bold pl-5'>
                    {
                        session ? <Link href="/api/auth/signout">
                            <div className='flex items-center font-bold align-middle pr-2 
        text-md transition-transform transform hover:scale-[1.155] 
        duration-300 text-white'>
                                Sign-Out of {session.user?.name}
                            </div>
                        </Link>
                            : <Link href="/api/auth/signin" >
                                <div className='    flex items-center font-bold align-middle pr-2 
        text-md transition-transform transform hover:scale-[1.155] 
        duration-300 text-white'>
                                    Sign-In
                                </div>
                            </Link>
                    }
                    <div className='pl-5'>
                        <TopMenuItem title='My Booking' pageRef='/mybooking' />
                    </div>
                </div>
                <TopMenuItem title='Campground' pageRef='/campground' />
                <div className='px-5'></div>
                <TopMenuItem title='Booking' pageRef='/booking' />
                <Image src={'/img/vaccine.png'}
                    className='ml-10 w-[100px] h-[60px]'
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100vh' />
            </div>
        </div>
    )
}