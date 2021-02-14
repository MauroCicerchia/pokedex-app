import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "react-native-elements";
import useStyles from "./styles";
import IGenerationData from "../../interfaces/IGenerationData";

export default function GenerationsList({ imageUrl, generation }: IGenerationData) {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);
	const backgroundSource = require('../../images/pokeball-icon.png');

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Generación {generation}</Text>
			<Image style={styles.image} resizeMode="contain" source={{ uri: imageUrl }} />
			<Image style={styles.image} source={backgroundSource} />
		</View>
	);
}
