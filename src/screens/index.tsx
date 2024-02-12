import Main from '@screens/Main';
import Onboarding from '@screens/Onboarding';
import React from 'react';
import {RootStackParamList} from '@screens/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
	return (
		<Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
			<Screen name="Main" component={Main} />
			<Screen name="Onboarding" component={Onboarding} />
		</Navigator>
	);
};

export default RootStack;
