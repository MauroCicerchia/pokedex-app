import _ from "lodash";
import React from 'react';
import { Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import BaseCard from '../BaseCard';
import useStyles from "./styles";
import IPokemon from '../../interfaces/IPokemon';

export default function PokemonCard({ name, sprite }: IPokemon) {
    const theme = useTheme();
	const navigation = useNavigation();
    const styles = useStyles(theme);

    return (
        <BaseCard handleOnPress={() => console.log("Navigating")}>
            <Text style={styles.text}>{_.capitalize(name)}</Text>
            <Image style={styles.image} resizeMode="center" source={{ uri: sprite }} />
        </BaseCard>
    );
}

