import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "react-native-elements";
import useStyles from "./styles";
import IGenerationData from "../../interfaces/IGenerationData";

export default function GenerationsList({ imageUrl, generation }: IGenerationData) {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);

	return (
		<View style={styles.container}>
			<Image style={styles.image} resizeMode="contain" source={{ uri: imageUrl }} />
			<Text style={styles.text}>Generación {generation}</Text>
		</View>
	);
}
