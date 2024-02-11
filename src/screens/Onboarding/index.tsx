import {OnboardingParams, OnboardingScreenProps} from '@screens/types';

import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator<OnboardingParams>();

const OnboardingNativeStack: React.FC<OnboardingScreenProps> = () => {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				headerBackTitleVisible: false,
				animation: 'slide_from_right',
				headerBackVisible: false,
			}}
		>
			<Screen name="Step1" component={Step1} />
			<Screen name="Step2" component={Step2} />
			<Screen name="Step3" component={Step3} />
		</Navigator>
	);
};

export default OnboardingNativeStack;
