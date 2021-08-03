import { useField } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import TextInput from './TextInput';
import Text from './Text';

const FormixTextInput = ({ name, ...props }) => {
	console.log(name, typeof name, 'name');
	const [field, meta, helpers] = useField(name);
	const showError = meta.touched && meta.error;
	// console.log(showError, 'meta.thouched');
	return (
		<>
			<TextInput
				onChangeText={(value) => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				{...props}
			/>
			{showError && <Text style={styles.errorText}> {meta.error}</Text>}
		</>
	);
};

export default FormixTextInput;

const styles = StyleSheet.create({
	errorText: {
		marginTop: 5,
	},
});
