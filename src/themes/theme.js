import { Platform } from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		primary: '#0366d6',
		darkGrey: '#24292e',
		gray: '#e1e4e8',
		red: '#d73a4a',
	},
	fontSizes: {
		body: 14,
		subheading: 18,
		heading: 22,
	},
	fonts: {
		main: Platform.select({
			default: 'system',
			ios: 'sans-serif',
			android: 'Roboto',
		}),
		// 'System',
		// sansSerif: 'sansSerif',
		// roboto: 'Roboto',
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
	padding: {
		container: 15,
	},
};

export default theme;
