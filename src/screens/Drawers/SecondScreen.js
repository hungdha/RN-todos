/**
 * Created by hoangnd on 7/5/17.
 */
import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class SecondScreen extends React.Component {
    

    render() {
        return <View style={
            styles.container
        }>
            <Text style={{fontSize: 30, color: 'blue'}}>
                Screen 2
            </Text>
            <Button
                onPress={() => this.props.navigation.openDrawer() }
                title="Open DrawNavigator"
            />
        </View>
    }
}