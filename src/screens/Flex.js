import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Flex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>200X100</Text>
        </View>
        <View style={styles.main}>
          <View  style={styles.mainContent}>
            <Text style={styles.text}>100X100</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>200X100</Text>
        </View>
      </View>
    );
  }
}
