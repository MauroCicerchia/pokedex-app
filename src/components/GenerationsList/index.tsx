import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import GenerationCard from "../GenerationCard";
import styles from "./styles";
import IGeneration from "../../interfaces/IGeneration";
import IPokemon from "../../interfaces/IPokemon";

export default function GenerationsList(props: GenerationListProps) {
	// TODO hay un footer blanco y se nota la separación con las Cards
	return (
		<View style={styles.container}>
			<FlatList
				data={props.data}
				renderItem={({ item }) => renderItem(item)}
				keyExtractor={(_, id) => id.toString()}
				numColumns={2}
			/>
		</View>
	);
}

const renderItem = (data: IGeneration | IPokemon) => <GenerationCard {...data} />;

interface GenerationListProps {
	data: Array<IGeneration | IPokemon>
};
