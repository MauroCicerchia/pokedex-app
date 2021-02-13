import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors, ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import Home from "./components/Home";

const lightTheme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
    }),
	primary: "#FFF"
  },
};

const darkTheme = {
	colors: {
	  ...Platform.select({
		default: colors.platform.android,
	  }),
	  primary: "#222"
	},
  };

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
