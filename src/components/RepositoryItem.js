import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../themes/theme';
import Text from './Text';

// StyleSheet,
const RepositoryItem = ({ data }) => {
	// console.log(data, 'asd');
	let forks = data.forks,
		stars = data.stars,
		ratings = data.ratings,
		reviews = data.reviews;

	if (data.forks >= 1000) {
		forks = `${(data.forks / 1000).toFixed(1)}K`;
		// console.log(forks, 'forks');
	}
	if (data.stars >= 1000) {
		stars = `${(data.stars / 1000).toFixed(1)}K`;
	}
	if (data.ratings >= 1000) {
		ratings = `${(data.ratings / 1000).toFixed(1)}K`;
	}
	if (data.reviews >= 1000) {
		reviews = `${(data.reviews / 1000).toFixed(1)}K`;
	}
	return (
		<View style={styles.container}>
			<View style={styles.flexDirection}>
				<Image style={styles.image} source={{ uri: data.avatar }} />
				<View style={styles.detail}>
					<Text
						style={{
							marginBottom: 5,
							fontSize: theme.fontSizes.heading,
						}}
						fontWeight='bold'
						// numberLines={2}
					>
						{data.fullname}
					</Text>
					<Text
						style={{ marginBottom: 7 }}
						fontSize='subheading'
						color='textSecondary'
					>
						{data.description}
					</Text>
					<Text style={styles.tag} fontSize='subheading'>
						{data.language}
					</Text>
				</View>
			</View>
			<View
				style={[
					styles.flexDirection,
					{
						marginTop: 30,
						justifyContent: 'space-around',
						alignItems: 'center',
						paddingHorizontal: 20,
					},
				]}
			>
				<View style={styles.footer}>
					<Text style={styles.number} fontWeight='bold'>
						{stars}
					</Text>
					<Text style={styles.description} color='textSecondary'>
						Stars
					</Text>
				</View>
				<View style={styles.footer}>
					<Text style={styles.number} fontWeight='bold'>
						{forks}
					</Text>
					<Text style={styles.description} color='textSecondary'>
						Forks
					</Text>
				</View>
				<View style={styles.footer}>
					<Text style={styles.number} fontWeight='bold'>
						{reviews}
					</Text>
					<Text style={styles.description} color='textSecondary'>
						Reviews
					</Text>
				</View>
				<View style={styles.footer}>
					<Text style={styles.number} fontWeight='bold'>
						{ratings}
					</Text>
					<Text style={styles.description} color='textSecondary'>
						Rating
					</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;

const styles = StyleSheet.create({
	container: {
		padding: theme.padding.container,
		backgroundColor: 'white',
	},
	flexDirection: {
		flexDirection: 'row',
	},
	detail: {
		flexShrink: 1,
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 5,
		marginRight: 20,
	},
	tag: {
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		paddingVertical: 6,
		paddingHorizontal: 7,
		borderRadius: 4,
		color: 'white',
	},
	footer: { alignItems: 'center' },
	number: {
		fontSize: theme.fontSizes.heading,
		marginBottom: 5,
	},
	description: { fontSize: theme.fontSizes.heading },
});
