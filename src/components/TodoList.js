// 


import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 10 }}  >
          {
            this.props.todos.map((todo) =>
              <TodoItem {...todo} key={todo.id} />
            )
          }
        </View>
      </ScrollView>
    );
  }
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
} 
