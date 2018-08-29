import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
 } from 'react-native';

export default class ForgotPassword extends Component {

  static navigationOptions = {
    title : 'Forgot password'
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', '');
    return (
      <View>
        <Text> ForgotPassword </Text>
        <TextInput placeholder="email" />
        <Text>{username}</Text>
        <Button title="Send" onPress={() => alert('send')} />
      </View>
    );
  }
}
