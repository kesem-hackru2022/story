import React from 'react'
import {Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';


export const Grid: React.FC<{
    durationInFrames: number;
    text: string;
    images: string[];
}> = ({text, images, durationInFrames}) => {

    const frame = useCurrentFrame();

    const yPercent = interpolate(frame, [0, durationInFrames], [0, -60], {
        easing: Easing.bezier(0.96, 0.65, 0.8, 0.22),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <div className="mx-auto p-8 relative">
            <h1 className="relative z-10 text-white bg-black mx-8 text-center font-title-bull font-semibold rounded-full" style={{fontSize: 150}}>{text}</h1>
            <div className="grid grid-cols-3 gap-16"
                style={{
                    transform: `translateY(${yPercent}%)`,
                }}
            >
                {images.map((img, i) => {
                    return (
                        <Img src={img}
                            style={{
                                gridColumn: i % 4 == 1 ? 'span 2 / span 2' : 'span 1/ span 1',
                            }}
                            className={`w-full h-full object-cover`} />
                    )
                })}
            </div>

        </div>
    )
}
