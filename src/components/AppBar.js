import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../themes/theme';

const AppBar = () => {
	return (
		<>
			<View style={styles.container}></View>
			<AppBarTab />
		</>
	);
};

export default AppBar;

const styles = StyleSheet.create({
	container: {
		height: Constants.statusBarHeight,
		maxHeight: Constants.statusBarHeight,
		backgroundColor: theme.colors.darkGrey,
	},
});
