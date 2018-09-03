import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';
import styles from './styles';

export default class ThirdScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <Text> Screen 3 </Text>
                <Button
                    onPress={() => this.props.navigation.openDrawer()}
                    title="Open DrawNavigator"
                />
            </View>
        );
    }
}
