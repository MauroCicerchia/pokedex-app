import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import IGeneration from "../../interfaces/IGeneration";
import IPokemon from "../../interfaces/IPokemon";

export default function BaseList({ data, renderItem, contentContainerStyle = {} }: ListProps) {
	return (
		<FlatList
			contentContainerStyle={{ ...styles.contentContainer, ...contentContainerStyle }}
			data={data}
			renderItem={({ item }) => renderItem(item)}
			keyExtractor={(_, id) => id.toString()}
			numColumns={2}
		/>
	);
}

interface ListProps {
	data: Array<IGeneration | IPokemon>;
	renderItem: Function;
	contentContainerStyle?: Object;
};
