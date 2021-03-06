import './style.css';

import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {FashionStory} from './FashionStory';
import { MyMama } from './MyMama';
import { GunsForSale } from './GunsForSale';


export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="InstagramAd"
				component={FashionStory}
				durationInFrames={220}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					titleText: 'New Stuff! Dont miss out',
					titleColor: 'black',
				}}
			/>

			<Composition
				id="MyMama"
				component={MyMama}
				durationInFrames={280}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					titleText: 'Black dress for sale',
					titleColor: 'black',
				}}
			/>

			<Composition
				id="GunsForSale"
				component={GunsForSale}
				durationInFrames={280}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					titleText: 'Very Good Guns',
					titleColor: 'black',
				}}
			/>

			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
