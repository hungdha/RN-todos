import React, { Component } from 'react';
import { View, Text, Dimensions,
	 ViewPagerAndroid , KeyboardAvoidingView,
	  Image, Alert, Keyboard,
	  TouchableOpacity,
	  TouchableHighlight
	} from 'react-native';
import ImagePicker from 'react-native-image-picker';
// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
	title: 'Select Avatar',
	customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
	storageOptions: {
	  skipBackup: true,
	  path: 'images',
	},
  };
import styles , { globalStyles, colors} from '../styles';

var mWidth = Dimensions.get('window').width;
var mHeight = Dimensions.get('window').height;
import logo from '../assets/images/logo-native.png';
import bgSignUp from '../assets/images/bgSignUp.png';
import TextInputPlus from '../components/TextInputPlus';
import TextPlus from '../components/TextPlus';
import {DatePicker } from 'react-native-wheel-datepicker';
import ButtonPlus from '../components/ButtonPlus';
import Loading from '../components/Loading';
import {formatDate} from '../utils/date';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const PAGES =[
	"Creation account",
	"First Name and Last Name",
	"Email or Phone",
	"Birthday",
	"Password",
	"Avatar",
	"Done"
];

const initialState = {
	page  : 0,
	user : {
		firstName: 'xx',
		lastName : 'yy',
		emailOrPhone : 'ahihih@xamml.com',
		birthday : '',
		password : '',
		passwordConfirm : '',
		avatarUrl : '',
	},
	error:'',
	isSigning : false
}
export default class SignUp extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			title: navigation.getParam('title', 'Creation account'),
			headerLeft(){
				return (
						<TouchableOpacity onPress={() => params.handleSubmit() } style={{ width: 50, height:50, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF' }}>
							<Icon name="arrow-left" size={15} color="#000000"   />
						</TouchableOpacity>
					
				)
			}
		};
	};
	constructor(props){
		super(props);
		this.state = initialState;
	}
	backAlertWarning = () => {
		Alert.alert(
			"You're still editing!",
			"Are you sure you want to go home with your edits not saved?",
			[
				{ text: "Discard", onPress: () => {
					this.setState(initialState)
					this._setPage(0);
				}, style: "cancel" },
				{ text: "YES", onPress: () => {
					
				} },
			],
			{ cancelable: false },
			);
	}
	
	componentDidMount() {
		
		this.props.navigation.setParams({ handleSubmit: this.backAlertWarning });
	}
	
  _pageSelected(event) {
      this.setState({
          page : event.nativeEvent.position
	  });
  }
  _onPageScroll(event) {
      console.log("position: " + event.nativeEvent.position)
	  console.log("offset : " + event.nativeEvent.offset)
	 
  }

  _setPage(page){
	console.log("has page: ", page);

	const { firstName, lastName, emailOrPhone, birthday, password, passwordConfirm  } = this.state.user;
	let isError =  false; 
	const currentPage = page -1;
	switch (currentPage) {
		case 1: // first name and last name
			if(!firstName || !lastName){
				this.setState({
					error: 'First name and last name is required'
				})
				isError = true;
			}
			break; 
		case 2: // emailOrPhone
			if(!emailOrPhone){
				this.setState({
					error : 'Email or Phone is required'
				});
				isError =  true;
			}
			break;
		case 3: // birthday
			if(!birthday){
				this.setState({
					error : 'Birthday is required'
				})
				isError =  true;
			}
			break;
		case 4: //password && passwordConfirm
			if( password.length < 8 ){
				this.setState({
					error: 'Password is too short'
				})
				isError =  true;
			}
			else if( password != passwordConfirm ){
				this.setState({
					error : 'Password do not match'
				})
				isError =  true;
			}
			break;	
		default:
			break;
	}
	if(!isError){
		this.viewPager && this.viewPager.setPage(page);
		this.setState({page});
		this.setState({
			error : ''
		});
		this.props.navigation.setParams({title: PAGES[page]});
		Keyboard.dismiss();
	}
  }
  _setPage2(page){
	this.viewPager && this.viewPager.setPage(page);
	this.setState({page});
	this.setState({
		error : ''
	});
	this.props.navigation.setParams({title: PAGES[page]});
	Keyboard.dismiss();
  }
	confirmBirthday () {
		if( this.state.user.birthday )
			this._setPage(4);
		else
		Alert.alert(
			"You're still editing!",
			"Are you sure you want to go home with your edits not saved?",
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'OK', onPress: () => {
					/* this.setState({
						user: {
							...this.state.user,
							birthday : formatDate(new Date())
						}
					}) */
				}},
			],
			{ cancelable: false },
			);
	}

	async _register(){
		try{
			this.setState({
				isSigning: true
			});
			const response = await axios.get('http://ergast.com/api/f1/seasons.json')
			this.props.navigation.navigate('SignIn');

			/* console.log(response)
			if (this.state.username == 'admin' && this.state.password == 'admin') {
				AsyncStorage.setItem('userToken', 'abc');
				this.props.navigation.navigate('Home');
				console.log('goo gogoooo')
			} else {
				this.setState({
					isSigning : false,
					error: 'Username or password invalid !!!'
				});
			} */
		  
		}
		catch(error) {
		console.log(error);
		}
	}
	renderErrors(){
		return (
			<View style={{ justifyContent:'center', paddingTop:20, paddingBottom: 20, paddingLeft:15, paddingRight:15 }}>
				<TextPlus style={{ color:'red'}}>{this.state.error}</TextPlus>
			</View>
		)
	}
  render() {
	  const {isSigning}  = this.state;
      return (
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<Loading isLoading={isSigning} title="Signing in..."/>
				{ this.state.error ? this.renderErrors() : null }
              	<ViewPagerAndroid
					style={[styles.viewPager, {flex:2}]}
					initialPage={0}
					onPageSelected={this._pageSelected.bind(this)}
					onPageScroll={this._onPageScroll.bind(this)}
					scrollEnabled={false}
					ref={viewPager => { this.viewPager = viewPager}}
				  
              	>

				  	{/* intro */}
					<View style={[styles.pageStyle,{paddingLeft:0, paddingRight:0}]} key="0">
						
						<View style={{flex:1, 
							justifyContent:'center', 
							}}>
								<View style={{flex:2,justifyContent:'center', alignItems:'stretch'}}>
									<Image source={bgSignUp}  />
								</View>
								<View style={{ 
									flex:1,
												flexDirection:'column', 
												justifyContent:'center', 
												alignItems:'center',
												marginBottom:10,
											}}>
									<TextPlus style={[globalStyles.textHeader,{ color: colors.SECONDARY }]} >Join Us</TextPlus>
									<TextPlus style={globalStyles.textNormal}>We'll help you create a new account in a few easy steps</TextPlus>
									
									<TouchableOpacity onPress={ ()=> this.props.navigation.navigate('SignIn') }>
										<TextPlus style={[globalStyles.textNormal,{ color: colors.SECONDARY }]} >Sign In</TextPlus>
									</TouchableOpacity>
									
								</View>
								<View style={{
										paddingLeft:15,
										paddingRight:15,
										marginBottom:10,
									}}>
										<ButtonPlus
										title="Next"
										onPress ={() => this._setPage(1)}
										/>
									</View>
						</View>
					</View>
					{/* first Name and last name*/}
					<View style={styles.pageStyle} key="1">
					  	
				  		<View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
						  	<TextPlus style={globalStyles.textLabel}>FirstName and LastName</TextPlus>
							<TextInputPlus placeholder="First Name " style={{marginBottom: 10}} value={this.state.user.firstName}
							onChangeText={ (text) => this.setState({ user: {
								...this.state.user,
								firstName: text
							} })}
							 />
							<TextInputPlus placeholder="Last Name " style={{marginBottom: 10}} value={this.state.user.lastName}
							onChangeText={ (text) => this.setState({ user: {
								...this.state.user,
								lastName: text
							} })}
							 />
							<ButtonPlus
							title="Next"
							onPress ={() => this._setPage(2)}
							 />
					  	</View>
                  	</View>
					{/* email or phone */}
					<View style={styles.pageStyle} key="2">
					  	
				  		<View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
						  	<TextPlus style={globalStyles.textLabel}>Email or Phone</TextPlus>
							<TextInputPlus placeholder="Email or Phone" style={{marginBottom: 10}} value={this.state.user.emailOrPhone}
							onChangeText={ (text) => this.setState({ user: {
								...this.state.user,
								emailOrPhone: text
							}})}
							 />
							<ButtonPlus
							title="Next"
							onPress ={() => this._setPage(3)}
							 />
					  	</View>
                  </View>
					{/* birthday */}
                  	<View style={styles.pageStyle} key="3">
						<View style={{flex:1, 
								justifyContent:'center', 
								}}>
									<TextPlus>Birthday</TextPlus>
									<DatePicker
										date = {new Date()}
										mode="date"
										textColor="grey"
										textSize={20}
										onDateChange={(date) => 
											this.setState({ 
												user:{
													...this.state.user,
													'birthday' : date
												}
											}) 
										}
									/>
									<ButtonPlus
										title="Next"
										onPress ={() =>  this.confirmBirthday() }
									/>
									

					  	</View>
                      
                  </View>
					{/* password */}
					<View style={styles.pageStyle} key="4">
				  		
				  		<View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
						  	<TextPlus>Password</TextPlus>
							<TextInputPlus 
							placeholder="Password" 
							style={{marginBottom: 10}}
							secureTextEntry={true}
							onChangeText={ (pwd) => this.setState({
								user: {
									...this.state.user,
									password: pwd
								}
							})}
							/>
							<TextInputPlus 
							placeholder="Password confirm"
							secureTextEntry={true}  
							style={{marginBottom: 10}}
							onChangeText={ (pwdCfm) => this.setState({
								user: {
									...this.state.user,
									passwordConfirm : pwdCfm
								}
								
							})}
							/>
							<ButtonPlus
							title="Next"
							onPress ={() => this._setPage(5)}
							 />
					  	</View>

                  </View>
                  	{/* avatar */}
					<View style={styles.pageStyle} key="5" >
				  		
				  		<View style={{flex:1, justifyContent:'center'}}>
						  	<View style={ {justifyContent:'center', alignItems:'center'} }>
							  	<Image source={this.state.avatarSource} style={styles.uploadAvatar} />
								<TextPlus>Image</TextPlus>
								<Image source={logo} style={[styles.StyleImageDemo,{marginBottom: 10}]}/>
							</View>
							<ButtonPlus title="Next" onPress ={() => this._setPage(6)}
							 />
						</View>
                  </View>
                  	{/* done */}
					<View style={styles.pageStyle} key="6" >
					  <View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
							<View>
								<TextPlus>{this.state && JSON.stringify(this.state) }</TextPlus>
							</View>	


						  <TextPlus>Thank You !.</TextPlus>
						<ButtonPlus
						title="Register" 
						onPress={ () =>  {
this._register()
						}}
						/>
                      </View>
                  </View>
              </ViewPagerAndroid>
			  <View style={[styles.sectionFooter, {flexDirection:'row'}]}>
						  {
							  PAGES.map( (item, index ) => (
								index == this.state.page ? 
								(
									
										<View style={{ borderColor: '#FFF', borderWidth: 1}} key={index} style={{ backgroundColor:'#789'}}>
											<Text  style={[globalStyles.textNormal, {fontWeight:'bold', color:'white', fontSize:19, marginLeft:5, marginRight:5, padding:5  }]}>{ this.state.page }</Text>
										</View>
									
								) : 
								(
									<TouchableOpacity onPress={ () => this._setPage2(index)  } key={index} style={{ backgroundColor:'#777'}}>
										<Text key={index} style={[globalStyles.textSmall, {color:'white', fontSize:20, marginLeft:5, marginRight: 5}  ]}>{index}</Text>
									</TouchableOpacity>
								)
							  ))
						  }
              </View>
          </KeyboardAvoidingView>
      )
  }
}