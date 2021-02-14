import { StyleSheet } from "react-native";

export default theme =>
    StyleSheet.create({
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
            backgroundColor: theme.colors.primary,
        },
        image: {
            width: 100,
            height: 100,
        },
        text: {
            color: theme.colors.text,
            fontWeight: "bold",
        },
    });
