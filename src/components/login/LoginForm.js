import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../../themes/theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
// import FormixTextInput from '../FormixTextInput';

const LoginForm = ({ onSubmit }) => {
	return (
		<View style={styles.container}>
			<FormikTextInput name='username' placeholder='Username' />
			<FormikTextInput
				name='password'
				placeholder='Password'
				secureTextEntry
			/>
			<Pressable onPress={onSubmit} style={styles.button}>
				<Text style={styles.textButton}> Sign In </Text>
			</Pressable>
		</View>
	);
};

export default LoginForm;

const styles = StyleSheet.create({
	container: {
		padding: theme.padding.container,
		backgroundColor: 'white',
	},
	button: {
		backgroundColor: theme.colors.primary,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: theme.padding.container,
	},

	textButton: {
		color: 'white',
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
	},
});
