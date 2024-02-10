import { StyleSheet, View } from 'react-native';

import AppText from './AppText';
import COLOR from '../../utils/theme/colors';
import React from 'react';

const StepLabel: React.FC<{ curPage: number; totalPage: number }> = ({ curPage, totalPage }) => {
  return (
    <View style={styles.container}>
      <AppText variant='body2Semibold' style={styles.curPageText}>{curPage}</AppText>
      <AppText variant='body2Semibold' style={styles.totalPageText}>/{totalPage}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: COLOR.PRIMARY3,
  },
  curPageText: {
    color: COLOR.WHITE
  },
  totalPageText: {
    color: COLOR.WHITE,
    opacity: 0.5
  }
})

export default StepLabel;