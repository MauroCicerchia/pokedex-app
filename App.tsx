import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors, ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import Home from "./components/Home";

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

export default function App() {
  const colorScheme = useColorScheme(); // TODO revisar bien esto

	return (
		<SafeAreaProvider>
			<ThemeProvider useDark={colorScheme === 'dark'} theme={theme}>
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
