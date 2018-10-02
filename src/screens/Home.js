import React, { Component } from 'react';
import {
	AsyncStorage,
	View,
	Text,
	Button,
	Image,
	StyleSheet,
	NetInfo,
	Dimensions
} from 'react-native';
import SettingsMenuContext from '../components/SettingsMenuContext';
const logoSrc = require('../assets/images/logo-native.png');
const { width } = Dimensions.get('window');


export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Home',
			headerRight: (
				<View style={{ marginRight: 10 }}>
					<SettingsMenuContext navigation={navigation} >
						<Text>Settings</Text>						
					</SettingsMenuContext>
				</View>
			)
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			isConnected: true,
			count: 0,
		};
	}
	handleConnectivityChange = isConnected => {
		this.setState({ isConnected: isConnected });

		/* if (isConnected) {
			this.setState({ isConnected: isConnected });
		} else {
			this.setState({ isConnected: isConnected });
		} */
	}
	
	componentDidMount() {
		this.props.navigation.setParams({ increaseCount: this._increaseCount });
		NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
	}
	componentWillUnmount() {
		NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
	 }
	_increaseCount = () => {
		this.setState({ count: this.state.count + 1 });
	};
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('SignIn');
	};
	renderOfflineMode(){
		return (<View style={styles.offlineContainer}>
			<Text style={styles.offlineText}>No Internet Connection</Text>
		</View>)
	}
	render() {
		NetInfo.getConnectionInfo().then((connectionInfo) => {
			console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
		  });
		return (	
			<View style={styles.container}>
				{ !this.state.isConnected ? this.renderOfflineMode() : null }
				<Text> Home !! </Text>
				<Image source={logoSrc} style={{ width: 100, height: 100 }} />
				<View>
					<View style={{  paddingTop: 10, paddingBottom: 10 }}>
						<Button title="Todos" onPress={() => (this.props.navigation.navigate('Todos'))} />
						<Button title="Tabs" onPress={() => (this.props.navigation.navigate('Tab'))} />
					</View>
					
					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Button title="Tabs Bottom" onPress={() => (this.props.navigation.navigate('TabBottom'))} />
					</View>
					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Button title="Drawer navigation" onPress={() => (this.props.navigation.navigate('Drawer'))} />
					</View>
					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Button title="Sign Out" onPress={this._signOutAsync} />
					</View>
					
					<View style={{ paddingTop: 10, paddingBottom: 10 }}>
						<Button title="Contacts" onPress={() => this.props.navigation.navigate('ContactsScreen') } />
					</View>

				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{flex:1 , marginRight:10}} >
						<Button title="Save" onPress={() => {}}></Button>
					</View>
					<View style={{flex:1,marginRight:10}} >
						<Button title="Cancel" onPress={() => {}}></Button>
					</View>
					<View style={{flex:1}} >
						<Button title="exit" onPress={() => {}}></Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1
	},
	offlineContainer: {
		backgroundColor: '#b52424',
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: width,
		position: 'absolute',
		top: 30
	  },
	  offlineText: { 
		color: '#fff'
	  }
})