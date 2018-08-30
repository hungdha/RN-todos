import React, { Component } from 'react';
import { View, Text, CheckBox, Button } from 'react-native';
// import SettingsMenuContext from '../components/SettingsMenuContext';

export default class Settings extends Component {
  static navigationOptions = {
    title : 'Settings'
  };
  constructor(props) {
    super(props);
    this.state = {
      checkedA: false,
      checkedB: false,
    };
  }

  render() {
    return (
      <View>

        <Text> Settings </Text>
        <CheckBox />
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            value={this.state.checkedA}
            onValueChange={() => this.setState({ checkedA: !this.state.checkedA })}
          />
          <Text style={{ marginTop: 5 }} onPress={() => this.setState({ checkedA: !this.state.checkedA })}> this is checkbox A</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            value={this.state.checkedB}
            onValueChange={() => this.setState({ checkedB: !this.state.checkedB })}
          />
          <Text style={{ marginTop: 5 }} onPress={() => this.setState({ checkedB: !this.state.checkedB })}> this is checkbox B</Text>
        </View> 
        <Button title="Save changes" onPress={ ()=> alert('You have been save changes !!!') } />
      </View>
    );
  }
}
