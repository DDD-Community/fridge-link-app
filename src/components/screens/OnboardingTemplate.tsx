import { Button, StepLabel } from '@components/common';
import {Image, StyleSheet, View} from 'react-native';

import COLOR from '@utils/theme/colors';
import React from 'react';
import {STATIC_IMG_URI} from '@utils/constants';
import { useNavigation } from '@react-navigation/native';

const ONBOARDING_TOTAL_PAGE = 3;

const OnboardingTemplate:React.FC<{onNextStep: () => void, curPage: number}> = ({onNextStep, curPage}) => {
  const navigation  = useNavigation<any>();

  return (
    <View style={styles.container}>
    <StepLabel curPage={curPage} totalPage={ONBOARDING_TOTAL_PAGE} />
    <Image style={styles.image} source={{uri: `${STATIC_IMG_URI}/img_onboarding_${curPage}.png`}} />
    <View style={styles.buttonWrapper}>
      <Button variant={'clickable'} label={'다음'} onPress={onNextStep} />
      {ONBOARDING_TOTAL_PAGE > curPage ?
        <Button variant={'skippable'} label={'건너뛰기'} onPress={() => navigation.navigate('Main')} />
        :
        <View style={styles.emptyButton} />
    }
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLOR.PRIMARY2,
	},
	buttonWrapper: {
		width: '100%',
		paddingHorizontal: 12,
	},
	image: {
		aspectRatio: 320 / 529,
		width: '85%',
	},
  emptyButton:{
    height: 51
  }
});

export default OnboardingTemplate;