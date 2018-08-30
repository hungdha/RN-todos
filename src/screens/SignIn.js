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
      flex: 1,
    },
    error:{
      color: 'red',
      fontStyle: 'italic',
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
      username  : 'admin',
      password : 'admin'
    };
  }
  _signInAsync = async () => {
    if(this.state.username == 'admin' || this.state.passoword == 'admin'){
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Home');
    }else{
      this.setState({
        error: 'Username or password invalid !!!'
      })
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <Text style={styles.error}>{this.state.error}</Text>
        <TextInput placeholder="username" onChangeText={(un) => this.setState({username: un})}  value={this.state.username} />
        <TextInput placeholder="password" onChangeText={(pw) => this.setState({
          passoword : pw
        })} secureTextEntry={true}  value={this.state.password} />
        <Button
              onPress={this._signInAsync}
              title="Login"
            />
        <Text onPress={() => navigate('ForgotPassword', {username: 'user01'})}>Forgot password</Text>
      </View>
    );
  }
}
