import React from "react";
import PokemonCard from "../PokemonCard";
import IPokemon from "../../interfaces/IPokemon";
import BaseList from "../BaseList";

export default function PokemonList({ data }: PokemonListProps) {
	return <BaseList data={data} renderItem={renderItem}></BaseList>;
}

const renderItem = (data: IPokemon) => <PokemonCard {...data} />;

interface PokemonListProps {
	data: Array<IPokemon>;
}
