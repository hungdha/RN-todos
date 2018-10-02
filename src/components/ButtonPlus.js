import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ButtonPlus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title, onPress} = this.props;
		return (
		  <TouchableOpacity style={styles.buttonStyle}
			onPress={() => onPress()}
		  >
			 <Text style={styles.textStyle}>{title}</Text>
		  </TouchableOpacity>
		);
  }
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize:20,
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'CaviarDreams',
    },
    
    buttonStyle: {
      padding:10,
      backgroundColor: '#202646',
      borderRadius:0
    }
  });
