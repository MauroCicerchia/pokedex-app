import React, { Component, useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ThemeContext } from 'react-native-elements';

const GenerationsList = ({ imageUrl, generation }) => {
	const { theme } = useContext(ThemeContext);
	const styles = useStyles(theme);
	
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={{ uri: imageUrl }}
			/>
			<Text style={styles.text}>Generación {generation}</Text>
		</View>
	);
}

const useStyles = (theme) => StyleSheet.create({
	container: {
		padding: 4,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 4,
		marginHorizontal: 4,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.95,
		elevation: 5,
		backgroundColor: theme.colors.primary
	},
	image: {
		width: 100,
		height: 100,
	},
	text: {
		color: "orange",
		fontWeight: "bold",
	},
});

export default GenerationsList;
