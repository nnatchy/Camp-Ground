interface Props{
    picture:string
    name:string
    province:string
    country:string
}

export default function CardItem({picture,name,province,country}:Props){
    return (
        <div className="w-[333px] h-[450px] rounded-[20px]
        border-[2px] border-solid border-white bg-black ml-[200px] mt-[70px]">

        </div>
    )
}