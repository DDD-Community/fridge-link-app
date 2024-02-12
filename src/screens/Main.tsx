import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainScreenProps} from '@screens/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const Main: React.FC<MainScreenProps> = () => {
	const navigation = useNavigation<MainScreenProps['navigation']>();

	// TODO URI 추가
	const uri = '';

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
		<SafeAreaView style={{flex: 1}} edges={['top']}>
			<WebView source={{uri}} />
		</SafeAreaView>
	);
};

export default Main;
