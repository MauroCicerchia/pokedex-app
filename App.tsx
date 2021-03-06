import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import themes from "./src/themes";
import HomeScreen from "./src/views/Home";
import GenerationDetailScreen from "./src/views/GenerationDetail";

const Stack = createStackNavigator();

const generationTitle = ({ route: { params: { region } } }: any) => ({ title: region });

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
							backgroundColor: theme.colors.background
						},
						headerTitleContainerStyle: {
							paddingTop: 50
						},
						headerTitleAlign: 'left',
						headerTintColor: theme.colors.text,
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 36
						},
						headerLeft: null
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