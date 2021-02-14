import React from "react";
import { View, Text } from "react-native";
import GenerationsList from "../GenerationsList";
import styles from "./styles";

export default function Home() {
	return (
		<View>
			<Text style={styles.title}>Pokédex</Text>
			<GenerationsList />
		</View>
	);
}
