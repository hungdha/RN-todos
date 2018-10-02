import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TextPlus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Text {...this.props} style={[styles.text, this.props.style]}>{this.props.children}</Text>
    );
  }
}

const styles = StyleSheet.create({
    text:{ 
        fontSize: 15, 
        fontFamily: 'CaviarDreams',
      
    }
})
