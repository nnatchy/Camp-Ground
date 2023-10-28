import Image from "next/image";

interface Props{
    source:string;
}

export default function Banner({source}:Props){
    return (
        <div>
            <Image src={source}
            alt="banner"
            fill={true}/>
        </div>
    )
}