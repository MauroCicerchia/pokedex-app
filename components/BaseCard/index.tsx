import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "react-native-elements";
import useStyles from "./styles";
import IGenerationData from "../../interfaces/IGenerationData";

export default function GenerationsList({ imageUrl, generation }: IGenerationData) {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);
	const backgroundSource = require('../../images/pokeball.png');

	return (
		<View style={styles.container}>
			<Image style={styles.imageBackground} source={backgroundSource} />
			<Text style={styles.text}>Generación {generation}</Text>
			<Image style={styles.image} resizeMode="center" source={{ uri: imageUrl }} />
		</View>
	);
}
