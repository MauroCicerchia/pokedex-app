import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "react-native-elements";
import useStyles from "./styles";
import IGenerationData from "../../interfaces/IGenerationData";

export default function BaseCard({ imageUrl, generation }: IGenerationData	) {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);
	console.log(theme)
	const backgroundSource = theme.dark ? require("../../images/pokeball-dark.png") : require("../../images/pokeball-light.png");

	return (
		<View style={styles.container}>
			<Image style={styles.imageBackground} source={backgroundSource} />
			<Text style={styles.text}>Generación {generation}</Text>
			<Image style={styles.image} resizeMode="center" source={{ uri: imageUrl }} />
		</View>
	);
}
