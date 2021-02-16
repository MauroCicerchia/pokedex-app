import { DarkTheme } from '@react-navigation/native';

export default {
	...DarkTheme,
	dark: true,
	colors: {
		...DarkTheme.colors,
		primary: "#F5F5F5",
		background: "#1E1E1E",
		backgroundSecondary: "#2E2E2E",
		text: "#F5F5F5",
	},
};
