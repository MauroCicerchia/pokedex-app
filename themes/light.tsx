import { Platform } from "react-native";
import { colors } from "react-native-elements";

export default {
	dark: false,
	colors: {
		...Platform.select({
			default: colors.platform.android,
		}),
		primary: "#FFFFFF",
		background: "#FFFFFF",
		backgroundSecondary: "#FFFFFF",
		text: "#202832",
	},
	logos: {
		pokeball: "pokeball-light",
	}
};
