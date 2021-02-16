import React from 'react'
import { Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import BaseCard from '../BaseCard';
import useStyles from "./styles";
import IGeneration from '../../interfaces/IGeneration';

export default function GenerationCard({ generation, image }: IGeneration) {
    const theme = useTheme();
	const navigation = useNavigation();
    const styles = useStyles(theme);

    return (
        <BaseCard handleOnPress={() => navigation.navigate('Generation', { generation })}>
            <Text style={styles.text}>Generación {generation}</Text>
            <Image style={styles.image} resizeMode="center" source={image} />
        </BaseCard>
    );
}

