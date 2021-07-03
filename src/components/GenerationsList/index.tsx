import React from "react";
import GenerationCard from "../GenerationCard";
import IGeneration from "../../interfaces/IGeneration";
import BaseList from "../BaseList";

export default function GenerationsList({ data }: GenerationListProps) {
	// TODO mejorar el maxHeight
	return <BaseList data={data} renderItem={renderItem} contentContainerStyle={{maxHeight: "65%"}}></BaseList>;
}

const renderItem = (data: IGeneration) => <GenerationCard {...data} />;

interface GenerationListProps {
	data: Array<IGeneration>
};
