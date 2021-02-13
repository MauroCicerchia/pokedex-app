import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import GenerationsList from "./GenerationsList";

export default class Home extends Component {
	render() {
		return (
			<View>
				<Text style={styles.title}>Pokédex</Text>
				<GenerationsList />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
        marginTop: 10,
        marginLeft: 20,
		fontSize: 32,
		fontWeight: "700",
	},
});
