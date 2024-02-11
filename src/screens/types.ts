import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
	Main: undefined;
	Onboarding: NavigatorScreenParams<OnboardingParams>;
};

export type OnboardingParams = {
	Step1: undefined;
	Step2: undefined;
	Step3: undefined;
};

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

export type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export type OnboardingStep1ScreenProps =CompositeScreenProps<
NativeStackScreenProps<RootStackParamList>,
NativeStackScreenProps<OnboardingParams, 'Step1'>
>

export type OnboardingStep2ScreenProps =CompositeScreenProps<
NativeStackScreenProps<RootStackParamList>,
NativeStackScreenProps<OnboardingParams, 'Step3'>
>

export type OnboardingStep3ScreenProps =CompositeScreenProps<
NativeStackScreenProps<RootStackParamList>,
NativeStackScreenProps<OnboardingParams, 'Step3'>
>
