import React from 'react'
import {Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';


export const Card: React.FC<{
    durationInFrames: number;
    text: string;
    subtitle: string;
    image: string;
}> = ({text, image, durationInFrames, subtitle}) => {

    const frame = useCurrentFrame();

    const opacityPercent = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0])

    return (
        <div className="mx-auto relative w-full">
            <h1 className="absolute pr-32 top-20 -rotate-12 transform w-full text-center text-pink-700 font-title font-semibold" style={{fontSize: 150}}>{text}</h1>


            <Img src={image} className="rounded-2xl shadow-xl object-cover" style={{
                width: "100%",
                height: "100%",
                opacity: opacityPercent,
            }} />


        </div>
    )
}
