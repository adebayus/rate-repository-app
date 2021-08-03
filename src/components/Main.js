import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList ';
import theme from '../themes/theme';
import { Redirect, Route, Switch } from 'react-router-native';
import LoginPage from './login/LoginPage';

const Main = () => {
	console.log(Dimensions.get('window').width, 'ini width');
	return (
		<View style={styles.container}>
			<AppBar />
			<Switch>
				<Route path='/' exact>
					<RepositoryList />
				</Route>
				<Route path='/signin'>
					<LoginPage />
				</Route>
				<Redirect to='/' />
			</Switch>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		maxWidth: Dimensions.get('window').width,
		flex: 1,
		backgroundColor: theme.colors.gray,
	},
});

export default Main;
