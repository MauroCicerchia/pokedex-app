import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { useColorScheme } from "react-native-appearance";
import themes from "./themes";
import Home from "./components/Home";

export default function App() {
	// const colorScheme = useColorScheme();
	// const theme = themes[colorScheme] || themes.dark;
	const theme = themes.dark;
	const styles = useStyles(theme);

	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<View style={styles.container}>
					<StatusBar />
					<Home />
				</View>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

const useStyles = (theme) => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	title: {
		fontSize: 32,
		fontWeight: "700",
		color: theme.colors.text
	},
});
