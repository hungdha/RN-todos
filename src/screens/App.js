import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Animated,
    Easing,
    Image,
    Navigator
} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';


import Welcome from './Welcome';
import Todos from './Todos';
import EditTodo from './EditTodo';
import Home from './Home';
import Settings from './Settings';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Tab from './Tab';
import TabBottom from './TabBottom';
import ContactsScreen from './ContactsScreen';
import AddContactScreen from './AddContactScreen';


import { MenuProvider } from 'react-native-popup-menu';
import DrawerExample from './DrawerExample';
// import Drawer from './DrawerExample';



const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Settings: {
        screen: Settings
    },
    Todos: {
        screen: Todos
    },
    EditTodo: {
        screen: EditTodo
    },
    Tab: {
        screen: Tab
    },
    TabBottom: {
        screen: TabBottom
    },
    Drawer: {
        screen: DrawerExample
    },
    ContactsScreen : {
        screen : ContactsScreen,
        navigationOptions : {
            drawerLabel: 'Contacts'
        }
    },
    AddContactScreen : {
        screen : AddContactScreen,
       
    },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword }
}
);


const ModalNavigator = createStackNavigator(
    {
        Welcome: { screen: Welcome },
        SignIn: { screen: SignIn },
       
       
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);


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
        this.props.navigation.navigate(userToken ? 'Home' : 'SignUp');
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

class HomeScreen extends Component {
    static router = HomeNavigator.router;
    render() {
        return (
            <MenuProvider>
                <HomeNavigator navigation={this.props.navigation} />
            </MenuProvider>)
    }
}


class ModalScreen extends Component {
    static router = ModalNavigator.router;
    render() {
        return (
            <ModalNavigator navigation={this.props.navigation} />
        )
    }
}




const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Home: HomeScreen, // This screen renders a navigator!
        Modal: ModalScreen,
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