import {Pressable, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import AppText from '@components/common/AppText';
import COLOR from '@utils/theme/colors';
import {MainScreenProps} from '@screens/types';
import {useNavigation} from '@react-navigation/native';

const Main: React.FC<MainScreenProps> = () => {
	const navigation = useNavigation<MainScreenProps['navigation']>();
	useEffect(() => {}, []);
	return (
		<View>
			<Text>WebView 연동 </Text>
			<Pressable style={{backgroundColor: 'red'}} onPress={() => navigation.navigate('Onboarding', {screen: 'Step1'})}>
				<AppText style={{color: COLOR.POINT1}} variant="heading1Bold">
					test
				</AppText>
			</Pressable>
		</View>
	);
};

export default Main;
