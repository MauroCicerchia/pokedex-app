import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useTheme } from '@react-navigation/native';
import GenerationsList from "../../components/GenerationsList";
import IGeneration from "../../interfaces/IGeneration";
import useStyles from "./styles";

const data: Array<IGeneration> = [
	{
		generation: "I",
		region: "Kanto",
		image: require("../../images/generations/first-generation.png"),
	},
	{
		generation: "II",
		region: "Johto",
		image: require("../../images/generations/second-generation.png"),
	},
	{
		generation: "III",
		region: "Hoenn",
		image: require("../../images/generations/third-generation.png"),
	},
	{
		generation: "IV",
		region: "Sinnoh",
		image: require("../../images/generations/fourth-generation.png"),
	},
	{
		generation: "V",
		region: "Unova",
		image: require("../../images/generations/fifth-generation.png"),
	},
	{
		generation: "VI",
		region: "Kalos",
		image: require("../../images/generations/sixth-generation.png"),
	},
	{
		generation: "VII",
		region: "Alola",
		image: require("../../images/generations/seventh-generation.png"),
	},
	{
		generation: "VIII",
		region: "Galar",
		image: require("../../images/generations/eigth-generation.png"),
	},
];

export default function Home() {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<SafeAreaView style={styles.container}>
			<GenerationsList data={data} />
		</SafeAreaView>
	);
}
