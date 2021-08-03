import { useField } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../themes/theme';
import Text from './Text';
import TextInput from './TextInput';

const FormikTextInput = ({ name, ...props }) => {
	// console.log(props);

	const [field, meta, helpers] = useField(name);

	const showError = meta.touched && meta.error;
	if (name == 'username') {
		console.log(
			meta.touched,
			meta.error,
			showError,
			`{show error ${name}}`
		);
	}
	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.textInput, showError && styles.textInputError]}
				onChangeText={(value) => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				{...props}
			/>
			{showError && <Text style={styles.errorText}> {meta.error} </Text>}
		</View>
	);
};

export default FormikTextInput;

const styles = StyleSheet.create({
	textInput: {
		fontSize: theme.fontSizes.subheading,
		padding: 10,
		height: 50,
		borderWidth: 2,
		borderRadius: 4,
		borderColor: theme.colors.gray,
	},
	textInputError: {
		borderColor: theme.colors.red,
	},
	container: {
		marginBottom: 15,
	},
	errorText: {
		marginTop: 10,
		fontSize: theme.fontSizes.subheading,
		color: theme.colors.red,
	},
});
