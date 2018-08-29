import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import TodosScreen from './Todos';
import EditTodoScreen from './EditTodo';
import HomeScreen from './Home';
import SignInScreen from './SignIn';
import ForgotPasswordScreen from './ForgotPassword';

/* const AppNavigator = createStackNavigator(
    {
        Todos: TodosScreen,
        EditTodo: EditTodoScreen
    }, {
        mode: 'modal',
        headerMode: 'none'
    }); */
const AuthenticationNavigator = createStackNavigator({
    SignIn: SignInScreen,
    ForgotPassword: ForgotPasswordScreen,
});

class AuthenticationScreen extends Component {
    static router = AuthenticationNavigator.router;

    render() {
        return (
            <AuthenticationNavigator navigation={this.props.navigation} />
        );
    }
}

class AuthLoadingScreen extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'Home' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthenticationScreen, // This screen renders a navigator!
        Home: HomeScreen,
    }, {
        initialRouteName: 'AuthLoading'
    }
)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class App extends Component {
    render() {
        return <AppNavigator />;
    }
}

export default App