import { useEffect, useRef } from "react";

export function VideoPlayer({videoPath, isPlaying} : {videoPath: string, isPlaying: boolean}) {
    const vdoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    }, [isPlaying]);

    return (
            <video 
            src={videoPath}
            ref={vdoRef}
            controls
            loop
            muted
            preload="metadata"
            className="w-full border-4 rounded-lg border-black"
            />
    )
}