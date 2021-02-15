import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from "react-native-appearance";
import { ThemeProvider } from "react-native-elements";
import themes from "./src/themes";
import HomeScreen from "./src/views/Home";
import GenerationDetailScreen from "./src/views/GenerationDetail";
import IGenerationData from "./src/interfaces/IGenerationData";

const Stack = createStackNavigator();

const generationTitle = ({ route: { params: { generation } } }: any) => ({ title: `Generation ${generation}` });

export default function App() {
	const colorScheme = useColorScheme();
	// const theme = themes[colorScheme] || themes.dark;
	const theme = themes.dark;

	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<Stack.Navigator 
					screenOptions={{
						headerStyle: {
							backgroundColor: '#f4511e',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}>
					<Stack.Screen name="Pokedex" component={HomeScreen} />
					<Stack.Screen
						name="Generation"
						component={GenerationDetailScreen}
						options={generationTitle}
					/>
				</Stack.Navigator>
			</ThemeProvider>
		</NavigationContainer>
	);
}
