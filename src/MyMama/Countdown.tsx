import {spring, useCurrentFrame, useVideoConfig, interpolate, Easing} from 'remotion';

export const Countdown: React.FC<{
    topTitle: string;
    bottomTitle: string;
    days: number;
    durationInFrames: number;
}> = ({topTitle, bottomTitle, days, durationInFrames}) => {

    const frame = useCurrentFrame();

    const xTopTitle = interpolate(frame, [0, durationInFrames/2, durationInFrames], [0, 0, 100], {
        easing: Easing.ease,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })

    const xBottomTitle = interpolate(frame, [0, durationInFrames/2, durationInFrames], [0, 0, -100], {
        easing: Easing.ease,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    })

    const counter = interpolate(frame, [0, durationInFrames/3*2, durationInFrames], [days, days, 0])

    const textSize = 150;

    return (
        <div className={`flex items-center justify-center mx-auto text-center`}>
            <div className="p-16 font-title-serif font-bold">
                <h1
                    className=""
                    style={{
                        fontSize: textSize,
                        transform: `translateX(${xTopTitle}%)`,
                    }}
                >
                    {topTitle}
                </h1>
                <span className="font-title font-light" style={{fontSize: 500}}>{Math.round(counter)}</span>
                <h2 style={{
                    fontSize: textSize,
                    transform: `translateX(${xBottomTitle}%)`,
                }}>{bottomTitle}</h2>
            </div>
        </div>
    );
};
