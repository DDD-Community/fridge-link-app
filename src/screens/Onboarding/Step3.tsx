import { OnboardingStep3ScreenProps } from '@screens/types';
import OnboardingTemplate from '@components/screens/OnboardingTemplate';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ONBOARDING_CURPAGE = 3;


const Step3:React.FC<OnboardingStep3ScreenProps> = () => {
  const navigation  = useNavigation<OnboardingStep3ScreenProps['navigation']>();
  
  return (
		<OnboardingTemplate onNextStep={()=> navigation.navigate('Main') } curPage={ONBOARDING_CURPAGE}/>
	);
};

export default Step3;
