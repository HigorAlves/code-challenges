import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../Assets/animations/loading.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const Loading = () => <Lottie options={defaultOptions} height={400} width={400} isStopped={false} isPaused={false} />;

export default Loading;
