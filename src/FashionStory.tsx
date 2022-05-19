import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from './FashionStory/Title';

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
				<Sequence from={0}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
			</div>
		</div>
	);
};
