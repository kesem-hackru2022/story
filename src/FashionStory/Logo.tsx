import React from 'react';
import {Img, interpolate, useCurrentFrame} from 'remotion';

export const Logo: React.FC<{
    image: string;
    text: string;
}> = ({text, image}) => {

const frame = useCurrentFrame();


    const endFrame = 10;
    const opacity = interpolate(frame, [0, endFrame], [0, 1], {
        // easing: Easing.bezier(0.96, 0.65, 0.8, 0.22),
        // extrapolateLeft: "clamp",
        // extrapolateRight: "clamp",
    });

    return (
        <div className="flex items-center justify-center mx-auto">
            <div className="mx-auto">
                <Img src={image} style={{width: '40vw', opacity: opacity}} />
                <h1 className="font-title font-bold mx-auto text-center" style={{fontSize: 100}}>{text}</h1>
            </div>
        </div>
    )
}

