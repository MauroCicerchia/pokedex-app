import { StyleSheet } from "react-native";

export default (theme: any) =>
    StyleSheet.create({
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
