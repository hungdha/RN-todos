import React from 'react'
import { View, Text } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';


import App from '../components/App'
import rootReducer from '../reducers'
import { getAllTodos } from '../actions';


const middleware = [thunk];

// console.log('middleware');
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllTodos())

export default class Todos extends React.Component {
    render() {
        return (<Provider store={store}>
            <App />
        </Provider>)
    }
}