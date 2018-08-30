import React, { Component } from 'react';
import {
	AsyncStorage,
	View,
	Text,
	Button,
	Image,
	StyleSheet
} from 'react-native';
import SettingsMenuContext from '../components/SettingsMenuContext';
const logoSrc = require('../assets/images/logo.jpg');


export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Home',
			headerRight: (
				<View style={{ marginRight: 10 }}>
					<SettingsMenuContext navigation={navigation }>
						<Text>Settings</Text>
					</SettingsMenuContext>
				</View>
			)
		}
	}

	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
		this.props.navigation.setParams({ increaseCount: this._increaseCount });
	}
	state = {
		count: 0,
	};

	_increaseCount = () => {
		this.setState({ count: this.state.count + 1 });
	};
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('SignIn');
	};
	render() {
		return (
			<View style={styles.container}>
				<Text> Home !! </Text>
				<Image source={logoSrc} style={{ width: 100, height: 100 }} />
				<Button title="Sign Out" onPress={this._signOutAsync} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1
	}
})