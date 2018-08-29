import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TodosScreen from './Todos';
import EditTodoScreen from './EditTodo';

const RootStack = createStackNavigator(
    {
        Todos: TodosScreen,
        EditTodo: EditTodoScreen
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      }
);
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
