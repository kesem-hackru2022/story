import {AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Card} from './GunsForSale/Card';
import {SimpleTitle} from './GunsForSale/SimpleTitle';

import Gun1 from '../imgs/gun1.jpg';
import Gun2 from '../imgs/gun2.jpg';
import Gun3 from '../imgs/gun3.jpg';
import Gun4 from '../imgs/gun4.jpg';
import Gun5 from '../imgs/gun5.jpg';
import Gun6 from '../imgs/gun6.jpg';
import Gun7 from '../imgs/gun7.jpg';
import Gun8 from '../imgs/gun8.jpg';
import Gun9 from '../imgs/gun9.jpg';
import Gun10 from '../imgs/gun10.jpg';
import Gun11 from '../imgs/gun11.jpg';
import Gun12 from '../imgs/gun12.jpg';
import Gun13 from '../imgs/gun13.jpg';
import Gun14 from '../imgs/gun14.jpg';
import Gun15 from '../imgs/gun15.jpg';
import Gun16 from '../imgs/gun16.jpg';
import Gun17 from '../imgs/gun17.jpg';
import Gun18 from '../imgs/gun18.jpg';
import Gun19 from '../imgs/gun19.jpg';

import GunLogo from '../imgs/progun_logo.png';
import {Logo} from './GunsForSale/Logo';
import {Grid} from './GunsForSale/Grid';

export const GunsForSale: React.FC<{
}> = () => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

    const titleColor = 'text-white'

    const gridDuration = 90 


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
                <AbsoluteFill className="bg-gradient-to-r from-gray-800 via-gray-900 to-black" style={{opacity: 1}} />
                <Sequence from={0} durationInFrames={30}>
                    <SimpleTitle titleText={'Winter Sale!'} titleColor={titleColor} durationInFrames={30} />
                </Sequence>
                <Sequence from={30} durationInFrames={30}>
                    <SimpleTitle titleText={'Only 54 hours'} titleColor={titleColor} durationInFrames={30} />
                </Sequence>
                <Sequence from={60} durationInFrames={gridDuration}>
                    <Grid durationInFrames={gridDuration} images={[
                        Gun1, Gun2, Gun3, Gun4, Gun5, Gun6, Gun7, Gun8, Gun9, Gun10, Gun11, Gun12, Gun13, Gun14, Gun15, Gun16, Gun17, Gun18, Gun19
                    ]} text="Our Collection" />
                </Sequence>
                <Sequence from={60 + gridDuration} durationInFrames={30}>
                    <Logo image={GunLogo} text={"ProGun"} />
                </Sequence>
            </div>
        </div>
    );
};
