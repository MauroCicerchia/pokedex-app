import React, { useState, useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { ThemeContext } from "react-native-elements";
import GenerationsList from "../../components/GenerationsList";
import IGenerationData from "../../interfaces/IGenerationData";
import useStyles from "./styles";

const data: Array<IGenerationData> = [
	{
		generation: "I",
		image: require("../../images/generations/first-generation.png"),
	},
	{
		generation: "II",
		image: require("../../images/generations/second-generation.png"),
	},
	{
		generation: "III",
		image: require("../../images/generations/third-generation.png"),
	},
	{
		generation: "IV",
		image: require("../../images/generations/fourth-generation.png"),
	},
	{
		generation: "V",
		image: require("../../images/generations/fifth-generation.png"),
	},
	{
		generation: "VI",
		image: require("../../images/generations/sixth-generation.png"),
	},
	{
		generation: "VII",
		image: require("../../images/generations/seventh-generation.png"),
	},
	{
		generation: "VIII",
		image: require("../../images/generations/eigth-generation.png"),
	},
];

export default function Home() {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Pokédex</Text>
			<GenerationsList data={data} />
		</SafeAreaView>
	);
}
