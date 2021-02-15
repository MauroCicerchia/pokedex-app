import { Platform } from "react-native";
import { colors } from "react-native-elements";

export default {
	colors: {
		...Platform.select({
			default: colors.platform.android,
		}),
		primary: "#F5F5F5",
		background: "#1E1E1E",
		backgroundSecondary: "#2E2E2E",
		text: "#F5F5F5"
	},
};
