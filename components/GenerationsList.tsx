import React, { Component } from 'react';
import { View } from 'react-native';
import BaseCard from "./BaseCard";

export default class GenerationsList extends Component {
    render() {
        return ["I", "II", "III"].map((generation, i) => <BaseCard key={i} generation={generation} />)
    }
}
