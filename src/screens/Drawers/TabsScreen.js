import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { createTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import styles from './styles';

class HomeScreen extends React.Component {
  render() {
    return <View style={
      styles.container
  }>
      <Text style={{fontSize: 30, color: 'blue'}}>
          Home
      </Text>
      <Button
          onPress={() => this.props.navigation.openDrawer() }
          title="Open DrawNavigator"
      />
  </View>
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class LocationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Location Screen!</Text>
      </View>
    );
  }
}

class MediaScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MediaScreen Screen!</Text>
      </View>
    );
  }
}



const TabNavigator = createTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  Location: { screen: LocationScreen },
  Media: { screen: MediaScreen },
});

class TabsScreen extends React.Component{
  static router = TabNavigator.router;
  
  render(){
    return (
      <TabNavigator navigation={this.props.navigation} />
    )
  }
}

export default TabsScreen