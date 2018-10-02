import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AddContactScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            title: 'Add contact',
        }
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}
