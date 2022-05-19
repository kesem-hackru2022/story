import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Card} from './GunsForSale/Card';
import {SimpleTitle} from './GunsForSale/SimpleTitle';

import FirstPicture from '../imgs/black.jpg';
import SecondPicture from '../imgs/silver.jpg';
import ThirdPicture from '../imgs/person-shooting.jpg';
import GunLogo from '../imgs/spa.svg';
import {Logo} from './GunsForSale/Logo';

export const GunsForSale: React.FC<{
}> = () => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

    const titleColor = 'text-white'

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
                <AbsoluteFill className="bg-gradient-to-r from-gray-800 via-gray-900 to-black" style={{opacity: 1}}/>
                <Sequence from={0} durationInFrames={30}>
                    <SimpleTitle titleText={'Winter Sale!'} titleColor={titleColor} durationInFrames={30} />
                </Sequence>
                <Sequence from={30} durationInFrames={30}>
                    <SimpleTitle titleText={'Only 54 hours'} titleColor={titleColor} durationInFrames={30} />
                </Sequence>
                <Sequence from={60} durationInFrames={cardDuration}>
                    <Card text="Black dress" subtitle="www.myshop.com" image={FirstPicture} durationInFrames={cardDuration} />
                </Sequence>
                <Sequence from={60+cardDuration} durationInFrames={cardDuration}>
                    <Card text="So fancy!" subtitle="20% discount now" image={SecondPicture} durationInFrames={cardDuration} />
                </Sequence>
                <Sequence from={60 + 2 * cardDuration} durationInFrames={cardDuration}>
                    <Card text="Hurry up" subtitle="20% discount now" image={ThirdPicture} durationInFrames={cardDuration} />
                </Sequence>
                <Sequence from={60 + 3 * cardDuration} durationInFrames={30}>
                    <Logo image={GunLogo} text={"B-Studio"} />
                </Sequence>
            </div>
        </div>
    );
};
