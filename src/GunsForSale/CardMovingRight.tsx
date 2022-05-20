import React from 'react'
import {Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import LackA from '../../imgs/lack_a.jpg'

export const Card: React.FC<{
    durationInFrames: number;
    text: string;
    subtitle: string;
    image: string;
}> = ({text, image, durationInFrames, subtitle}) => {

    const frame = useCurrentFrame();

    // from -100 to 100
    const xPercent = interpolate(frame, [0, durationInFrames - 15, durationInFrames], [-50, 0, 80], {
        // easing: Easing.bezier(0.96, 0.65, 0.8, 0.22),
        // extrapolateLeft: "clamp",
        // extrapolateRight: "clamp",
    });

    const opacityPercent = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0])

    return (
        <div className="mx-auto p-8 relative">

            <h2 className="absolute bottom-10 text-6xl font-title font-light uppercase">{subtitle}</h2>


            <Img src={image} className="rounded-2xl shadow-xl" style={{
                width: '100vh',
                height: '100vh',
                transform: `translateX(${xPercent}%)`,
                opacity: opacityPercent,
            }} />

            <h1 className="text-pink-700 font-title font-semibold" style={{fontSize: 150}}>{text}</h1>



        </div>
    )
}
