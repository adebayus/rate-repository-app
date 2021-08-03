import React from 'react';
import { Pressable, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../themes/theme';
import SignIn from './SignIn';
import Text from './Text';
// import {} from 'formix'
const AppBarTab = () => {
	return (
		<View style={styles.appBarTab}>
			<ScrollView horizontal>
				<Pressable style={{ marginRight: 5 }}>
					<Link to='/'>
						<Text style={styles.text}>Repositories</Text>
					</Link>
				</Pressable>
				<Pressable style={{ marginLeft: 5 }}>
					<Link to='/signin'>
						<SignIn />
					</Link>
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default AppBarTab;

const styles = StyleSheet.create({
	appBarTab: {
		height: 60,
		backgroundColor: theme.colors.darkGrey,
		justifyContent: 'center',
		padding: theme.padding.container,
	},
	text: {
		fontSize: theme.fontSizes.heading,
		color: '#eee',
		fontFamily: theme.fonts.main,
	},
});
