'use client'
import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer"
import { useWindowListener } from "../hooks/useWindowListener";


export default function PromoteCard() {
    const [playing, setPlaying] = useState(true);

    useWindowListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    return (


        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-pink-400">
            <VideoPlayer videoPath="/video/getvaccine.mp4" isPlaying={playing} />
            <div className="flex flex-col items-center">
                <span className="text-[30px] font-bold pb-2">Get your vaccine today.</span>
                <button
                    className="text-[25px] block rounded-md bg-red-500 
                hover:bg-rose-800 px-[20px] py-2 text-white shadow-sm border-2 
                border-black transform transform-colors duration-300 hover:border-white"
                    onClick={() => {
                        setPlaying(!playing);
                    }}
                >
                    {playing ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    )
}