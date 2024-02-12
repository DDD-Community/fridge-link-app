import {OnboardingStep1ScreenProps} from '@screens/types';
import OnboardingTemplate from '@components/screens/OnboardingTemplate';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ONBOARDING_CURPAGE = 1;

const Step1: React.FC<OnboardingStep1ScreenProps> = () => {
	const navigation = useNavigation<OnboardingStep1ScreenProps['navigation']>();

	return <OnboardingTemplate onNextStep={() => navigation.navigate('Step2')} curPage={ONBOARDING_CURPAGE} />;
};

export default Step1;
