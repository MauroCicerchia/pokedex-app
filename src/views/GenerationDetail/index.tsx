import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { SearchBar, ThemeContext } from "react-native-elements";
import useStyles from "./styles";
import GenerationsList from "../../components/GenerationsList";
import PokeApi from "../../services/pokeApi";

const pokeApi = new PokeApi();

export default function Home({ route: { params: { generation }} }: any) {
	const { theme } = useContext(ThemeContext);
	const [filterBy, setFilter] = useState();
	const [pokemons, setPokemons] = useState([]);
	const styles = useStyles(theme);

	useEffect(() => {
		pokeApi.fetchPage().tap(setPokemons)
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar
				placeholder="Buscar Pokemón..."
				onChangeText={setFilter}
				value={filterBy}
			/>
			<GenerationsList data={pokemons}/>
		</SafeAreaView>
	);
}
