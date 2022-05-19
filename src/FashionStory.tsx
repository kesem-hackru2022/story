import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Card} from './FashionStory/Card';
import {Title} from './FashionStory/Title';

import LackA from '../imgs/lack_a.jpg';
import LackB from '../imgs/lack_b.jpg';

export const FashionStory: React.FC<{
    titleText: string;
    titleColor: string;
}> = ({titleText, titleColor}) => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

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
                <Sequence from={0} durationInFrames={30}>
                    <Title titleText={titleText} titleColor={titleColor} />
                </Sequence>
                <Sequence from={30} durationInFrames={50}>
                    <Card text="New Look!" subtitle="www.myshop.com" image={LackA} durationInFrames={50} />
                </Sequence>
                <Sequence from={30+50} durationInFrames={50}>
                    <Card text="Fabolus!" subtitle="www.myshop.com" image={LackB} durationInFrames={50} />
                </Sequence>
            </div>
        </div>
    );
};
