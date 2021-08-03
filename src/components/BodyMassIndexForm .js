import React from 'react';
import { Pressable, Text, View } from 'react-native';
import FormixTextInput from './FormixTextInput';

const BodyMassIndexForm = ({ onSubmit }) => {
	return (
		<View>
			<FormixTextInput name='mass' placeholder='Weight (Kg)' />
			<FormixTextInput name='height' placeholder='Height (M)' />
			<Pressable onPress={onSubmit}>
				<Text>Calculate</Text>
			</Pressable>
		</View>
	);
};

export default BodyMassIndexForm;

// const styles = StyleSheet.create({});
