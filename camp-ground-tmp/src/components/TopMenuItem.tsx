import Link from "next/link";

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link href={pageRef} className='flex items-center font-bold align-middle pr-2 
        text-md transition-transform transform hover:scale-[1.155] 
        duration-300'>
            {title}
        </Link>
    )
}