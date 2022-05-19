import {spring, useCurrentFrame, useVideoConfig, interpolate, Easing} from 'remotion';

export const SimpleTitle: React.FC<{
    titleText: string;
    titleColor: string;
    durationInFrames: number;
}> = ({titleText, titleColor, durationInFrames}) => {
    const frame = useCurrentFrame();

    const yPercent = interpolate(frame, [0, durationInFrames], [0, 100], {
        easing: Easing.bezier(0.96, 0.65, 0.8, 0.22),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });



    return (
        <div className={`flex items-center justify-center mx-auto ${titleColor}`}>
        <h1
            className="font-title font-bold"
            style={{
                fontSize: 125,
                textAlign: 'center',
                width: '100%',
                transform: `translateY(${yPercent}%)`,
            }}
        >
            {titleText}
        </h1>
        </div>
    );
};
