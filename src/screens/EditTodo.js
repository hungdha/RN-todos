import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class EditTodo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Edit Todo'),
      
    };
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    // const name = navigation.getParam('name', 'NO-ID');
    return (
      <View>
        <Text> Edit Todo </Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
