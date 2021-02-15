import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "react-native-elements";
import GenerationsList from "../GenerationsList";
import useStyles from "./styles";

export default function Home() {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);

	return (
		<View>
			<Text style={styles.title}>Pokédex</Text>
			<GenerationsList />
		</View>
	);
}
