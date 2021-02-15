import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from "react-native-appearance";
import { ThemeProvider } from "react-native-elements";
import themes from "./src/themes";
import HomeScreen from "./src/views/Home";

const Stack = createStackNavigator();

export default function App() {
	const colorScheme = useColorScheme();
	// const theme = themes[colorScheme] || themes.dark;
	const theme = themes.dark;

	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							title: 'My home',
							headerStyle: {
								backgroundColor: '#f4511e',
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontWeight: 'bold',
							},
						}}
					/>
				</Stack.Navigator>
			</ThemeProvider>
		</NavigationContainer>
	);
}
