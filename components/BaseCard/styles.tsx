import { StyleSheet } from "react-native";

export default theme =>
    StyleSheet.create({
        container: {
            paddingTop: 4,
            paddingBottom: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.95,
            elevation: 7,
            backgroundColor: theme.colors.white,
            overflow: "hidden",
            maxHeight: 100
        },
        imageBackground: {
            width: 100,
            height: 100,
            position: "absolute",
            bottom: -25,
            right: -25,
            transform: [{ rotate: '-45deg' }],
        },
        image: {
            width: 100,
            height: 50,
        },
        text: {
            color: theme.colors.text,
            fontWeight: "bold",
            marginVertical: 5
        },
    });
