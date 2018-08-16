import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class ActionLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', height: 40 }}>
        <View style={{ flex: 1, paddingRight:10 }} >
          <Button title="Delete" onPress={
            () => console.log('asdasdas')
          } />
        </View>
        <View style={{ flex: 1,paddingRight:10 }} >
          <Button title="Edit" onPress={
            () => console.log('edit')
          } />
        </View>
        <View style={{ flex: 1}}>
          <Button title="Completed"  onPress={
            () => console.log('completed')
          } />
        </View>
      </View>
    );
  }
}
