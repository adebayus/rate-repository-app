import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../themes/theme';

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.colors.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
});

const Text = ({
	color,
	fontSize,
	fontWeight,
	style,
	// id,
	// numberLines,
	...props
}) => {
	const textStyle = [
		styles.text,
		color === 'textSecondary' && styles.colorTextSecondary,
		color === 'primary' && styles.colorPrimary,
		fontSize === 'subheading' && styles.fontSizeSubheading,
		fontWeight === 'bold' && styles.fontWeightBold,
		style,
	];
	// console.log(textStyle, { ...props }, id);
	return (
		<NativeText
			style={textStyle}
			// {...props}
		>
			{props.children}
		</NativeText>
	);
};

export default Text;
