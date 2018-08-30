import React from 'react'
import { View, Text } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';


// import App from '../components/App'
import rootReducer from '../reducers'
import { getAllTodos } from '../actions';
import { MenuProvider } from 'react-native-popup-menu';


const middleware = [thunk];

// console.log('middleware');
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllTodos())


import {
    createStackNavigator,
} from 'react-navigation';
import TodosScreen from './Todos';
import EditTodoScreen from './EditTodo';

const RootStack = createStackNavigator(
    {
        Todos: TodosScreen,
        EditTodo: EditTodoScreen
    },
    {
        initialRouteName: 'Home',
    }
);
export default class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MenuProvider>
                    <RootStack />
                </MenuProvider>
            </Provider>)
    }
}