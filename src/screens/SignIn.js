import React, { Component } from 'react';
import { 
    AsyncStorage,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
padding: 10,
    }
})

export default class SignIn extends Component {
    static navigationOptions = {
        title: 'SignIn',
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#900"
            />
          ),
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Home');
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <TextInput placeholder="username"  />
        <TextInput placeholder="password"  />
        <Button
              onPress={this._signInAsync}
              title="Login"
            />
        <Text onPress={() => navigate('ForgotPassword', {username: 'user01'})}>Forgot password</Text>
      </View>
    );
  }
}
