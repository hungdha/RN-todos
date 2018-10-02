import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class TextInputPlus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     
        <TextInput  
        {...this.props} 
        style={[styles.textStyle, this.props.style]} 
        underlineColorAndroid='transparent'
        />
      
    );
  }
}
const styles = StyleSheet.create({
    textStyle:{
      fontFamily: 'CaviarDreams',
      fontWeight: 'normal',
      margin: 0,
      height: 40,
      borderColor: '#202646',
      borderWidth: 1,
      paddingBottom: 0,
      paddingTop: 0,
      paddingLeft: 10,
      paddingRight: 10,
    }
})
