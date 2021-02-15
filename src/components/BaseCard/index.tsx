import React, { useContext } from "react";
import {
	View,
	Text,
	Image,
	TouchableHighlight,
	TouchableNativeFeedback,
	Platform,
} from "react-native";
import { useNavigation, NavigationContext } from '@react-navigation/native';
import { ThemeContext } from "react-native-elements";
import useStyles from "./styles";
import IGenerationData from "../../interfaces/IGenerationData";

export default function BaseCard({ image, generation }: IGenerationData) {
	const { theme } = useContext(ThemeContext);
	const navigation = useNavigation();
	const styles = useStyles(theme);
	const backgroundSource = theme.dark
		? require("../../images/pokeball-dark.png")
		: require("../../images/pokeball-light.png");


	const NativeFeedback = ({ children }) => {
		const touchables = { android: TouchableNativeFeedback, ios: TouchableHighlight };
		const Touchable = touchables[Platform.OS] || TouchableHighlight;
		return <Touchable onPress={() => navigation.navigate('Generation', { generation })}>{children}</Touchable>;
	};

	return (
		<NativeFeedback>
			<View style={styles.container}>
				<Image style={styles.imageBackground} source={backgroundSource} />
				<Text style={styles.text}>Generación {generation}</Text>
				<Image style={styles.image} resizeMode="center" source={image} />
			</View>
		</NativeFeedback>
	);
}
