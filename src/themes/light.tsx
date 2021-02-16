import { DefaultTheme } from '@react-navigation/native';

export default {
	...DefaultTheme,
	dark: false,
	colors: {
		...DefaultTheme.colors,
		primary: "#FFFFFF",
		background: "#FFFFFF",
		backgroundSecondary: "#FFFFFF",
		text: "#202832",
	},
	logos: {
		pokeball: "pokeball-light",
	}
};
