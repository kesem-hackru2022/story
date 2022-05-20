import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import {Card} from './FashionStory/Card';
import {SimpleTitle} from './FashionStory/SimpleTitle';

import LackA from '../imgs/lack_a.jpg';
import LackB from '../imgs/lack_b.jpg';
import BackgroundVideo from '../imgs/pink_bg.mp4';
import StoreLogo from '../imgs/spa.svg';
import {Logo} from './FashionStory/Logo';

export const FashionStory: React.FC<{
}> = () => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

    const titleColor = 'text-purple-900'

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
                <AbsoluteFill>
                    <Video src={BackgroundVideo} />
                </AbsoluteFill>
                {/* <AbsoluteFill className="bg-gradient-to-tr from-purple-300 to-purple-500" style={{opacity: 0.3}}/> */}
                <Sequence from={0} durationInFrames={30}>
                    <SimpleTitle titleText={'New Arrival'} titleColor={titleColor} durationInFrames={30} />
                </Sequence>
                <Sequence from={30} durationInFrames={30}>
                    <SimpleTitle titleText={'Shhhhhhh dont miss out'} titleColor={titleColor} durationInFrames={30} />
                </Sequence>
                <Sequence from={60} durationInFrames={50}>
                    <Card text="New Look!" subtitle="www.myshop.com" image={LackA} durationInFrames={50} />
                </Sequence>
                <Sequence from={60+50} durationInFrames={50}>
                    <Card text="Fabolus!" subtitle="20% discount now" image={LackB} durationInFrames={50} />
                </Sequence>
                <Sequence from={60+50+50} durationInFrames={30}>
                    <Logo image={StoreLogo} text={"Sofi Nails"} />
                </Sequence>
            </div>
        </div>
    );
};
