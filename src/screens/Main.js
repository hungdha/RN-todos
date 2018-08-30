import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 5,
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate('SignIn')
    }, 5000)

    /* this.timerID = setInterval(
      () => this.countDown,
      1000
    ); */
  }
  countDown() {
    /* this.setState((prevState, props) => {
      return {timer: prevState.timer -1 };
    }); */
  }
  componentWillUnmount() {

    // clearInterval(this.timerID);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to React Native App</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
