import React, { Component } from 'react';
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
} from 'react-native';

import TextPlus from '../components/TextPlus';
import TextInputPlus from '../components/TextInputPlus';
import ButtonPlus from '../components/ButtonPlus';
import axios from 'axios';
import Loading from '../components/Loading';

const { width, height } = Dimensions.get('window');
export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'admin',
			password: 'admin',
			keyboardShow: false,
			isLogging: false,
			error : ''
		};
	}
	_keyboardDidShow() {
		this.setState({
			keyboardShow: true
		});
	}
	_keyboardDidHide() {
		this.setState({
			keyboardShow: false
		});
	}
	componentDidMount() {
		this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
		this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
	}

	componentWillUnmount() {
		this.keyboardWillShowSub.remove();
		this.keyboardWillHideSub.remove();
	}
	_signInAsync = async () => {
		console.log('logging....')
		
		try{
			this.setState({
				isLogging: true
			});
			const response = await axios.get('http://ergast.com/api/f1/seasons.json')
			console.log(response)
			if (this.state.username == 'admin' && this.state.password == 'admin') {
				AsyncStorage.setItem('userToken', 'abc');
				this.props.navigation.navigate('Home');
				console.log('goo gogoooo')
			} else {
				this.setState({
					isLogging : false,
					error: 'Username or password invalid !!!'
				});
			}
		  
		}
		catch(error) {
		console.log(error);
		}
		

		/*  
		axios.get('http://localhost:3000/users/1')
		  .then(function (response) {
			console.log("myaixos response");
			console.log(response);

			if (this.state.username == 'admin' || this.state.password == 'admin') {
				AsyncStorage.setItem('userToken', 'abc');
				this.props.navigation.navigate('Home');
			} else {
				this.setState({
					error: 'Username or password invalid !!!'
				});
			}

		  })
		  .catch(function (error) {
			  console.log("my error")
			console.log(error);
		  });
		  */
		
	}

	renderLogo() {
		return (
			<View style={styles.image}>
				<Image style={styles.logo} source={require('./../assets/images/grunt-logo.png')} />
				<TextPlus>English - Espanol</TextPlus>
			</View>
		);
	}
	renderForgot() {
		return (
			<View style={styles.forgot}>
				<TextPlus onPress={() => this.props.navigation.navigate('ForgotPassword', { username: 'user01' })}>Forgot password</TextPlus>
			</View>
		);
	}
	renderCreateAccount() {
		return (
			<View style={styles.createNew}>
				<View style={styles.buttonCreateAcc}>
					<ButtonPlus title="Create new app account" onPress={() => {
						this.props.navigation.navigate('SignUp')
					}} />
				</View>
			</View>
		);
	}

	render() {
		const { navigate } = this.props.navigation;
		const {isLogging, error } = this.state;
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				{this.renderLogo()}
				<Loading isLoading={isLogging} title="Logging in"/>
				<TextPlus style={styles.error} >{error}</TextPlus>
				<View style={styles.form}>
					<View>
						<TextInputPlus
							placeholder="Username"
							onChangeText={(un) => this.setState({ username: un })}
							value={this.state.username}
							style={{ marginBottom: 15 }}
							
						/>
						<TextInputPlus
							placeholder="Password"
							onChangeText={(pw) =>
								this.setState({
									password: pw
								})}
							secureTextEntry={true}
							value={this.state.password}
							style={{ marginBottom: 15 }}
							onSubmitEditing={Keyboard.dismiss}
						/>
					</View>
					<View>
						<ButtonPlus onPress={this._signInAsync} title="Log In" />
					</View>
					{!this.state.keyboardShow ? this.renderForgot() : null}
					{!this.state.keyboardShow ? this.renderCreateAccount() : null}
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		flex: 1,
		flexDirection: 'column'
	},
	error: {
		color: 'red',
		fontStyle: 'italic'
	},
	image: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	form: {
		flex: 2
	},
	logo: {
		width: 100,
		height: 100
	},
	forgot: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	createNew: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonCreateAcc: {
		position: 'absolute',
		bottom: 0,
		width: width
	},
	loginText: {
		color: '#555000',
		fontWeight: 'bold',
		fontSize: 20
	},
	error:{
		color:'red',
		fontStyle : 'italic'
	}
});
