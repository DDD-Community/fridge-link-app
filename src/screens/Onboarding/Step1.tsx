import { Image, StyleSheet, View } from 'react-native';

import Button from '../../components/common/Button';
import COLOR from '../../utils/theme/colors';
import React from 'react';
import { STATIC_IMG_URI } from '../../utils/constants';
import StepLabel from '../../components/common/StepLabel';

const Step1 = () => {
  return (
    <View style={styles.container}>
      <StepLabel curPage={1} totalPage={3} />
      <Image
        style={styles.image}
        source={{ uri: `${STATIC_IMG_URI}/img_onboarding_2.png` }}
      />
      <View style={styles.buttonWrapper}>
        <Button variant={'clickable'} label={'다음'} onPress={() => null} />
        <Button variant={'skippable'} label={'건너뛰기'} onPress={() => null} />
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
  }
})

export default Step1;