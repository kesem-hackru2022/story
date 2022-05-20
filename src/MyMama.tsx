import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Card} from './MyMama/Card';
import {SimpleTitle} from './MyMama/SimpleTitle';

import first_picture from '../imgs/fw20-72_540x.webp';
import second_picture from '../imgs/fw20-69_540x.webp';
import third_picture from '../imgs/fw20-70_540x.webp';
import b_logo from '../imgs/b-studio_logo.webp';

import {Logo} from './FashionStory/Logo';
import {Countdown} from './MyMama/Countdown';

export const MyMama: React.FC<{
}> = () => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

    const cardDuration = 30

    const opacity = interpolate(
        frame,
        [videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
        [1, 0],
        {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        }
    );

    return (
        <div style={{flex: 1, backgroundColor: 'white'}}>
            <div style={{opacity}}>
                {/* <AbsoluteFill className="bg-gradient-to-tr from-purple-300 to-purple-500" style={{opacity: 0.3}}/> */}
                <Sequence from={0} durationInFrames={30}>
                    <Countdown topTitle="Openning Soon!" bottomTitle="To Go" days={3} durationInFrames={30} />
                </Sequence>
                <Sequence from={30} durationInFrames={cardDuration}>
                    <Card text="New Collection" image={first_picture} durationInFrames={cardDuration} />
                </Sequence>
                <Sequence from={30+cardDuration} durationInFrames={cardDuration}>
                    <Card text="All Black" image={second_picture} durationInFrames={cardDuration} />
                </Sequence>
                <Sequence from={30 + 2 * cardDuration} durationInFrames={cardDuration}>
                    <Card image={third_picture} durationInFrames={cardDuration} />
                </Sequence>
                <Sequence from={30 + 3 * cardDuration} durationInFrames={30}>
                    <Logo image={b_logo} text={"B-Studio"} />
                </Sequence>
            </div>
        </div>
    );
};
