import React, { Component } from "react";
import {
  AsyncStorage,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions
} from "react-native";

import TextPlus from '../components/TextPlus';
import TextInputPlus from '../components/TextInputPlus';
import ButtonPlus from '../components/ButtonPlus';
const {width, height } = Dimensions.get('window');
export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
	  password: "admin",
	  keyboardShow : false
	};
	
  }
  _keyboardDidShow(){
	console.log("keyboard will show");
	this.setState({
		keyboardShow : true
	})
  };
  _keyboardDidHide(){
	console.log("keyboard will hide");
	this.setState({
		keyboardShow : false
	})
  };
  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow.bind(this)
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide.bind(this)
	);
	// this.keyboardWillShowSub = this.keyboardWillShowSub.bind(this);
	// this.keyboardWillHideSub = this.keyboardWillHideSub.bind(this);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }
  _signInAsync = async () => {
    if (this.state.username == "admin" || this.state.password == "admin") {
      await AsyncStorage.setItem("userToken", "abc");
      this.props.navigation.navigate("Home");
    } else {
      this.setState({
        error: "Username or password invalid !!!"
      });
    }
  };

  renderLogo(){
	  return (<View style={styles.image}>
		<Image
		  style={styles.logo}
		  source={require("./../assets/images/grunt-logo.png")}
		/>
		<TextPlus>English - Espanol</TextPlus>
	  </View>)
  }
  renderForgot(){
	  return (
			<View style={styles.forgot}>
				<TextPlus
					onPress={() => navigate("ForgotPassword", { username: "user01" })}
				>
					Forgot password
				</TextPlus>
			</View>
	  )
  }
  renderCreateAccount(){
	return (<View style={styles.createNew}>
				<View style={styles.buttonCreateAcc}>
					<ButtonPlus title="Create new app account" onPress={() => {}} />
				</View>
			</View> )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        { this.renderLogo() }
        <View style={styles.form}>
			<View>
				<TextInputPlus
					placeholder="Username"
					onChangeText={un => this.setState({ username: un })}
					value={this.state.username}
					style={{marginBottom:15}}
					onSubmitEditing={Keyboard.dismiss}
 
				/>
				<TextInputPlus
				placeholder="Password"
					onChangeText={pw =>
					this.setState({
						password: pw
					})
					}
					secureTextEntry={true}
					value={this.state.password}
					style={{marginBottom:15}}
				/>
		  </View>
		  <View >
          	<ButtonPlus onPress={this._signInAsync} title="Log In" />
		  </View>
		  { !this.state.keyboardShow ? this.renderForgot() : null }  
		  { !this.state.keyboardShow ? this.renderCreateAccount() : null }  
		  </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
	flex:1,
	flexDirection: 'column',
  },
  error: {
    color: "red",
    fontStyle: "italic"
  },
  image: {
    flex: 1,
	justifyContent:'center', 
	alignItems: 'center',
  },
  form: {
    flex: 2
  },
  logo: {
    width: 100,
	height: 100,
	
  },
  forgot: {
    justifyContent: "center",
    alignItems: "center"
  },
  createNew: {
	flex: 1,
	justifyContent:'center',
	alignItems: 'center',
  },
  buttonCreateAcc:{
	position:'absolute',
	bottom:0,
	width:width

  },
  loginText:{
    color:'#555000',
    fontWeight: 'bold', 
    fontSize: 20   
  }
});
