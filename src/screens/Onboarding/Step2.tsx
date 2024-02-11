import { OnboardingStep2ScreenProps } from '@screens/types';
import OnboardingTemplate from '@components/screens/OnboardingTemplate';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ONBOARDING_CURPAGE = 2;

const Step2:React.FC<OnboardingStep2ScreenProps> = () => {
  const navigation  = useNavigation<OnboardingStep2ScreenProps['navigation']>();
  
  return (
		<OnboardingTemplate onNextStep={()=> navigation.navigate('Step3') } curPage={ONBOARDING_CURPAGE}/>
	);
};

export default Step2;
