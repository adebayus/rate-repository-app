import React from 'react';
import { Text, View } from 'react-native';
// StyleSheet,
const RepositoryItem = ({ data }) => {
	return (
		<View>
			<Text>Full name: {data.fullname}</Text>
			<Text>Description: {data.description}</Text>
			<Text>language: {data.language}</Text>
			<Text>Stars: {data.stars}</Text>
			<Text>Forks: {data.forks}</Text>
			<Text>Reviews: {data.reviews}</Text>
			<Text>Rating: {data.ratings}</Text>
		</View>
	);
};

export default RepositoryItem;

// const styles = StyleSheet.create({});
