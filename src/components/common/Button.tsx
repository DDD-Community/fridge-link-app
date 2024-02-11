import {Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React, {useMemo} from 'react';

import AppText from '@components/common/AppText';
import COLOR from '@utils/theme/colors';

type BottomVariant = 'skippable' | 'clickable';

const Button: React.FC<
	{variant: BottomVariant; label: string; style?: StyleProp<ViewStyle>; onPress: () => void} & PressableProps
> = ({variant, label, style, onPress, ...props}) => {
	const color = useMemo(() => {
		switch (variant) {
			case 'skippable':
				return COLOR.WHITE;
			case 'clickable':
			default:
				return COLOR.PRIMARY3;
		}
	}, [variant]);

	const backgroundColor = useMemo(() => {
		switch (variant) {
			case 'skippable':
				return 'transparent';
			case 'clickable':
			default:
				return COLOR.WHITE;
		}
	}, [variant]);

	return (
		<Pressable onPress={onPress} style={[styles.container, {backgroundColor}, style]} {...props}>
			<AppText variant="heading4Bold" style={{color}}>
				{label}
			</AppText>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 12,
	},
});

export default Button;
