import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BaseCard from "./BaseCard";
import IGenerationData from "../interfaces/IGenerationData";

const data: Array<IGenerationData> = [
	{
		generation: "I",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/01-Bulbasaur-Charmander-Squirtle.jpg",
	},
	{
		generation: "II",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/03-Chikorita-Cyndaquil-Totodile.jpg",
	},
	{
		generation: "III",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/04-Treecko-Torchic-Mudkip.jpg",
	},
	{
		generation: "IV",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/05-Turtwig-Chimchar-Piplup.jpg",
	},
	{
		generation: "V",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/06-Snivy-Tepig-Oshawott.jpg",
	},
	{
		generation: "VI",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/07-Chespin-Fennekin-Froakie.jpg",
	},
	{
		generation: "VII",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/08-Rowlet-Litten-Popplio.jpg",
	},
	{
		generation: "VIII",
		imageUrl:
			"https://bestreamer.com/wp-content/uploads/2019/12/09-Grookey-Scorbunny-Sobble.jpg",
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

const styles = StyleSheet.create({
	container: {
		paddingVertical: 5,
	},
});
