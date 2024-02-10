import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import React from 'react';

type TextStyleVariant =
  'heading1Bold' |
  'heading2Bold' |
  'heading2Semibold' |
  'heading3Bold' |
  'heading3Semibold' |
  'heading4Bold' |
  'heading4Semibold' |
  'body1Semibold' |
  'body1Medium' |
  'body1Regular' |
  'body2Semibold' |
  'body2Medium' |
  'body2Regular';

const AppText: React.FC<{ variant: TextStyleVariant; } & TextProps> = ({ variant, children, style, ...props }) => {

  const textStyles = StyleSheet.create({
    heading1Bold: {
      fontFamily: 'Pretendard',
      fontSize: 24,
      lineHeight: 30,
      fontWeight: 'bold',
    } as TextStyle,
    heading2Bold: {
      fontFamily: 'Pretendard',
      fontSize: 20,
      lineHeight: 26,
      fontWeight: 'bold',
    } as TextStyle,
    heading2Semibold: {
      fontFamily: 'Pretendard',
      fontSize: 20,
      lineHeight: 26,
      fontWeight: '600',
    } as TextStyle,
    heading3Bold: {
      fontFamily: 'Pretendard',
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 'bold',
    } as TextStyle,
    heading3Semibold: {
      fontFamily: 'Pretendard',
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600',
    } as TextStyle,
    heading4Bold: {
      fontFamily: 'Pretendard',
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 'bold',
    } as TextStyle,
    heading4Semibold: {
      fontFamily: 'Pretendard',
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '600',
    } as TextStyle,
    body1Semibold: {
      fontFamily: 'Pretendard',
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
    } as TextStyle,
    body1Medium: {
      fontFamily: 'Pretendard',
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
    } as TextStyle,
    body1Regular: {
      fontFamily: 'Pretendard',
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
    } as TextStyle,
    body2Semibold: {
      fontFamily: 'Pretendard',
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '600',
    } as TextStyle,
    body2Medium: {
      fontFamily: 'Pretendard',
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '500',
    } as TextStyle,
    body2Regular: {
      fontFamily: 'Pretendard',
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '400',
    } as TextStyle

  });


  return (
    <Text {...props} style={[textStyles[variant], style]} >{children}</Text>
  );
};

export default AppText;