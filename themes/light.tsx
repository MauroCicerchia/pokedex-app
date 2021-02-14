import { Platform } from "react-native";
import { colors } from "react-native-elements";

export default {
	colors: {
		...Platform.select({
			default: colors.platform.android,
		}),
		primary: "#000",
		background: "#FFF",
		text: "#000"
	},
};
