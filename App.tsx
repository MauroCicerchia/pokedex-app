import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { useColorScheme } from "react-native-appearance";
import { lightTheme, darkTheme } from "./themes";
import Home from "./components/Home";

export default function App() {
	const colorScheme = useColorScheme(); // TODO revisar bien esto

	return (
		<SafeAreaProvider>
			<ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
				<View style={styles.container}>
					<StatusBar />
					<Home />
				</View>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 32,
		fontWeight: "700",
	},
});
