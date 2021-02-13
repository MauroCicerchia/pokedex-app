import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class GenerationsList extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					resizeMode="contain"
					source={{ uri: this.props.imageUrl }}
				/>
				<Text style={styles.text}>Generación {this.props.generation}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 4,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
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
