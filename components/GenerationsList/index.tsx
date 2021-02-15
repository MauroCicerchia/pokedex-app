import React from "react";
import { FlatList, View } from "react-native";
import BaseCard from "../BaseCard";
import styles from "./styles";
import IGenerationData from "../../interfaces/IGenerationData";

const data: Array<IGenerationData> = [
	{
		generation: "I",
		imageUrl:
			"https://pokejungle.net/wp-content/uploads/2015/11/Generation1-Starters.png", // https://i.pinimg.com/originals/d9/0e/5f/d90e5f91087da1b1faf2939b30d7b1ab.png
	},
	{
		generation: "II",
		imageUrl:
			"https://pokejungle.net/wp-content/uploads/2015/12/Gen2Starters.png",
	},
	{
		generation: "III",
		imageUrl:
			"https://pokejungle.net/wp-content/uploads/2015/12/gen-3-starters.png",
	},
	{
		generation: "IV",
		imageUrl:
			"https://pokejungle.net/wp-content/uploads/2015/12/sinnoh-starters.png", // https://dlprivateserver.com/wp-content/uploads/2020/01/Pokemon-GO-Dia-de-la-comunidad-en-enero-de-2020.png
	},
	{
		generation: "V",
		imageUrl:
			"https://pokejungle.net/wp-content/uploads/2015/12/Gen-5-starters.png",
	},
	{
		generation: "VI",
		imageUrl:
			"https://pokejungle.net/wp-content/uploads/2015/12/gen6starters.png", // https://cdn.bulbagarden.net/upload/b/b7/Kalos_starters_XY_anime.png
	},
	{
		generation: "VII",
		imageUrl:
			"https://roantablog.files.wordpress.com/2016/05/gen-7-starters.png?w=640",
	},
	{
		generation: "VIII",
		imageUrl:
			"https://assets-prd.ignimgs.com/2019/11/16/starter-poll-1573864623971.png",
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
