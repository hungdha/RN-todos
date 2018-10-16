import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
 } from 'react-native';
import ButtonPlus from '../components/ButtonPlus';
import TextInputPlus from '../components/TextInputPlus';
import TextPlus from '../components/TextPlus';
import styles from '../styles';
export default class ForgotPassword extends Component {

  static navigationOptions = {
    title : 'Forgot password'
  };
  constructor(props) {
    super(props);
    this.state = {
      emailOrPhone : ''
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={[styles.container, {marginTop:20, paddingLeft: 15, paddingRight:15}]}>
        <TextPlus style={{ marginBottom: 10 }}> ForgotPassword </TextPlus>
        <TextInputPlus style={{ marginBottom: 10 }} placeholder="Email or Phone" onChangeText={ (text) => this.setState({ emailOrPhone: text }) } />
        <ButtonPlus title="Send" onPress={() => alert('send')} />
      </View>
    );
  }
}
