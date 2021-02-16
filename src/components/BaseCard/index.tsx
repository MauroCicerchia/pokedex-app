import React from "react";
import {
	View,
	Image,
	TouchableHighlight,
	TouchableNativeFeedback,
	Platform,
} from "react-native";
import { useTheme } from '@react-navigation/native';
import useStyles from "./styles";

export default function BaseCard({ handleOnPress, children }: any) {
	const theme = useTheme();
	const styles = useStyles(theme);
	const backgroundSource = theme.dark
		? require("../../images/pokeball-dark.png")
		: require("../../images/pokeball-light.png");

	const NativeFeedback = ({ children }: any) => {
		const touchables: any = { android: TouchableNativeFeedback, ios: TouchableHighlight };
		const Touchable = touchables[Platform.OS] || TouchableHighlight;
		return <Touchable onPress={handleOnPress}>{children}</Touchable>;
	};

	return (
		<NativeFeedback>
			<View style={styles.container}>
				<Image style={styles.imageBackground} source={backgroundSource} />
				{children}
			</View>
		</NativeFeedback>
	);
}
