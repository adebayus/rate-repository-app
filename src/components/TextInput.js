import React from 'react';
// import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, error, ...props }) => {
	console.log(error);
	const TextInputStyle = [style];
	return <NativeTextInput style={TextInputStyle} {...props} />;
};

export default TextInput;

// const styles = StyleSheet.create({});
