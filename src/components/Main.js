// import Con from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList ';

const Main = () => {
	return (
		<View style={styles.container}>
			<RepositoryList />
		</View>
	);
};

export default Main;

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		flexGrow: 1,
		flexShrink: 1,
	},
});
