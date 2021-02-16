import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { useTheme } from '@react-navigation/native';
import { SearchBar } from "react-native-elements";
import useStyles from "./styles";
import PokemonList from "../../components/PokemonList";
import PokeApi from "../../services/pokeApi";
import IPokemon from "../../interfaces/IPokemon";

const pokeApi = new PokeApi();

export default function Home({ route: { params: { generation }} }: any) {
	const theme = useTheme();
	const [filterBy, setFilter] = useState('');
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
			<PokemonList data={pokemons.filter(({ name }: IPokemon) => name.toLowerCase().includes(filterBy.toLowerCase()))}/>
		</SafeAreaView>
	);
}
