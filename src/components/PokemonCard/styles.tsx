import { StyleSheet } from "react-native";

export default (theme: any) =>
    StyleSheet.create({
        image: {
            width: 60,
            height: 60,
            alignSelf: "flex-end",
        },
        text: {
            color: theme.colors.text,
            fontWeight: "bold",
            marginVertical: 5
        },
    });
