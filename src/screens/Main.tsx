import {Pressable, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import AppText from '@components/common/AppText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLOR from '@utils/theme/colors';
import {MainScreenProps} from '@screens/types';
import {useNavigation} from '@react-navigation/native';

const Main: React.FC<MainScreenProps> = () => {
	const navigation = useNavigation<MainScreenProps['navigation']>();

	useEffect(() => {
		async function checkOnboardingViewed() {
			const onboardingViewed = await AsyncStorage.getItem('ComfirmOnboarding');
			if (!onboardingViewed) {
				navigation.navigate('Onboarding', {screen: 'Step1'});
			}
		}
		checkOnboardingViewed();
	}, []);

	return (
		<View>
			{/* TODO 제거  */}
			<Text>WebView 연동 </Text>
			<Pressable style={{backgroundColor: 'red'}} onPress={() => navigation.navigate('Onboarding', {screen: 'Step1'})}>
				<AppText style={{color: COLOR.POINT1}} variant="heading1Bold">
					goOnboarding
				</AppText>
			</Pressable>
		</View>
	);
};

export default Main;
