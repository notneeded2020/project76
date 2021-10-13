import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"#8cd7da"
                }}>
                <Text>StarMap Screen!</Text>
            </View>
        )
    }
}