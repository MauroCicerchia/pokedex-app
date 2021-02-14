import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GenerationsList from "./GenerationsList";

export default function Home() {
	return (
		<View>
			<Text style={styles.title}>Pokédex</Text>
			<GenerationsList />
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		marginTop: 10,
		marginLeft: 20,
		fontSize: 32,
		fontWeight: "700",
	},
});
