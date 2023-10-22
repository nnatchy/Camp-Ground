import Link from "next/link";

interface Props{
    title:string
    pageRef:string
}

export default function TopMenuItem({title,pageRef} : Props) {
    return (
        <Link href={pageRef} className='ml-[50px] hover:scale-200'>
            {title}
        </Link>
    )
}