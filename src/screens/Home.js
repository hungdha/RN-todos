import React, { Component } from 'react';
import {AsyncStorage, View, Text,Button } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <View>
        <Text> Home !! </Text>
        <Button title="Sign Out" onPress={this._signOutAsync}/>
      </View>
    );
  }
}
