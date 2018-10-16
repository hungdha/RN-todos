import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { navigation } = this.props;
     setTimeout(() => {
      navigation.navigate('SignIn')
    }, 500) 
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Welcome to React Native App</Text>
        <Text style={styles.header2}>Nice to meet you</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
