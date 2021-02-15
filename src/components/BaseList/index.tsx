import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import IGeneration from "../../interfaces/IGeneration";
import IPokemon from "../../interfaces/IPokemon";

export default function BaseList({ data, renderItem }: ListProps) {
	// TODO hay un footer blanco y se nota la separación con las Cards
	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={{paddingBottom: 150}} // TODO Ver como hacer esto bien
				data={data}
				renderItem={({ item }) => renderItem(item)}
				keyExtractor={(_, id) => id.toString()}
				numColumns={2}
			/>
		</View>
	);
}

interface ListProps {
	data: Array<IGeneration | IPokemon>;
	renderItem: Function;
};
