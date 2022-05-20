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
    const yPercent = interpolate(frame, [0, durationInFrames], [0, 50], {
        easing: Easing.bezier(0.96, 0.65, 0.8, 0.22),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const skewPercent = interpolate(frame, [0, durationInFrames], [-1, 1], {
        // easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),
        // extrapolateLeft: "clamp",
        // extrapolateRight: "clamp",
    });

    const opacityPercent = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0])

    const scalePercent = interpolate(frame, [0, durationInFrames], [1, 1.1]);
    return (
        <div className="mx-auto p-8 relative">
            <h1 className="text-pink-700 font-title-bull font-semibold" style={{fontSize: 150}}>{text}</h1>


            <h2 className="absolute bottom-10 text-6xl font-title font-light uppercase">{subtitle}</h2>


            <Img src={image} className="rounded-2xl shadow-xl" style={{
                width: '100vh',
                height: '100vh',
                transform: `translateY(${yPercent}%) skew(${skewPercent}deg, ${skewPercent}deg) scale(${scalePercent})`,
                opacity: opacityPercent,
            }} />


        </div>
    )
}
