import { StyleSheet } from "react-native";
import ITheme from "../../interfaces/ITheme";

export default (theme: ITheme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background
		},
		title: {
			marginTop: 10,
			marginLeft: 20,
			fontSize: 32,
			fontWeight: "700",
			color: theme.colors.text
		},
	});
