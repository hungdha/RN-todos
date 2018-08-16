
import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import TodoList from './TodoList';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo';
import ActionLink from '../containers/ActionLink';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  SampleFunction() {
    Alert.alert('long press here !!!')
  }
  render() {
    return (
      <View style={{ flex:1, padding: 10 }}>
        <View style={{ flex:3}}>
          <Text style={styles.title}>Todo list </Text>
          <ActionLink />
          <AddTodo />
        </View>
        <View style={{flex:7}} >
          <VisibleTodoList />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'red'
  }

})