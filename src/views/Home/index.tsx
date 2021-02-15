import React, { useState, useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { ThemeContext } from "react-native-elements";
import GenerationsList from "../../components/GenerationsList";
import useStyles from "./styles";

export default function Home() {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Pokédex</Text>
			<GenerationsList />
		</SafeAreaView>
	);
}
