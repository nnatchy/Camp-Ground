'use client'

interface Props {
    children:React.ReactNode
}

export default function CardAction({children} : Props){
    function onCardAction(event:React.SyntheticEvent){
        if (event.type == "mouseover"){
            event.currentTarget.classList.remove("mt-[70px]");
            event.currentTarget.classList.add("mt-[110px]");
            event.currentTarget.classList.add("mb-[40px]")
        } else {
            event.currentTarget.classList.remove("mt-[110px]");
            event.currentTarget.classList.remove("mb-[40px]");
            event.currentTarget.classList.add("mt-[70px]");
        }
    }

    return (
        <div className="basis-1/3">
            <div className="w-[400px] h-[550px] rounded-[20px] border-[2px] border-solid border-white 
            bg-black mt-[70px] ml-[120px] hover:scale-[1.10] duration-300"
        onMouseOver={(e)=>onCardAction(e)}
        onMouseOut={(e)=>onCardAction(e)}>
            {children}
            </div>
        </div>
    )
}