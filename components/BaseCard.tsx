import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class GenerationsList extends Component {
    render() {
        return (
            <Card>
                <Card.Title>Generation {this.props.generation}</Card.Title>
                <Card.Divider/>
                <View >
                    <Text>Pokemon</Text>
                </View>
            </Card>
        );
    }
}
