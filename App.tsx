import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import themes from "./src/themes";
import HomeScreen from "./src/views/Home";
import GenerationDetailScreen from "./src/views/GenerationDetail";

const Stack = createStackNavigator();

const generationTitle = ({ route: { params: { generation } } }: any) => ({ title: `Generation ${generation}` });

export default function App() {
	const colorScheme = useColorScheme();
	// const theme = themes[colorScheme] || themes.dark;
	const theme = themes.dark;

	return (
		<AppearanceProvider>
			<NavigationContainer theme={theme}>
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
			</NavigationContainer>
		</AppearanceProvider>
	);
}
