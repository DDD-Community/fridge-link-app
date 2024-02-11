import React from 'react';
import Step1 from './Step1';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

const OnboardingNativeStack: React.FC = () => {
	return (
		<Navigator>
			<Screen
				name="Step1"
				component={Step1}
				options={{
					headerShown: false,
					headerBackTitleVisible: false,
					animation: 'slide_from_right',
					headerBackVisible: false,
				}}
			/>
		</Navigator>
	);
};

export default OnboardingNativeStack;
