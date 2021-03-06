import { StyleSheet } from "react-native";
import ITheme from "../../interfaces/ITheme";

export default (theme: ITheme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background,
			marginTop: 50
		}
	});
