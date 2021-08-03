import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../themes/theme';
// import theme from './theme/theme';
import Text from './Text';

const SignIn = () => {
	return <Text style={styles.text}> Sign in </Text>;
};

export default SignIn;
const styles = StyleSheet.create({
	text: {
		fontSize: theme.fontSizes.heading,
		color: '#eee',
		fontFamily: theme.fonts.main,
	},
});
