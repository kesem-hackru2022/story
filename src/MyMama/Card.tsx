import React from 'react'
import {Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';


export const Card: React.FC<{
    durationInFrames: number;
    text?: string;
    image: string;
}> = ({text, image, durationInFrames}) => {

    const frame = useCurrentFrame();

    const opacityPercent = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0])

    return (
        <div className="mx-auto relative w-full">
            {text && <h1 className="absolute pr-32 bottom-64 -rotate-6 transform w-full text-center font-title-serif bg-white" style={{fontSize: 140}}>{text}</h1>}

            <Img src={image} className="rounded-2xl shadow-xl object-cover p-32" style={{
                width: "100%",
                height: "100%",
                opacity: opacityPercent,
            }} />


        </div>
    )
}
