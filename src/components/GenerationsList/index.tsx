import React from "react";
import { FlatList, View } from "react-native";
import BaseCard from "../BaseCard";
import styles from "./styles";
import IGenerationData from "../../interfaces/IGenerationData";

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

export default function GenerationsList() {
	// TODO hay un footer blanco y se nota la separación con las Cards
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => renderItem(item)}
				keyExtractor={(_, id) => id.toString()}
				numColumns={2}
			/>
		</View>
	);
}

function renderItem(data: IGenerationData) {
	return <BaseCard {...data} />;
}
