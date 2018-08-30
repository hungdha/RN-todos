import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Animated,
    Easing
} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
// import TodosScreen from './Todos';
// import EditTodoScreen from './EditTodo';
import Home from './Home';
import Settings     from './Settings';
import SignIn from './SignIn';
// import ModalScreen from './Modal';
import Main from './Main';


import ForgotPassword from './ForgotPassword';
import { MenuProvider } from 'react-native-popup-menu';
// import { MenuProvider } from 'react-native-popup-menu';

/* const AppNavigator = createStackNavigator(
    {
        Todos: TodosScreen,
        EditTodo: EditTodoScreen
    }, {
        mode: 'modal',
        headerMode: 'none'
    }); */



const HomeNavigator = createStackNavigator({
    Home :{
        screen : Home
    },
    Settings: {
        screen : Settings
    }
 }); 
 
 const ModalNavigator =createStackNavigator(
    {
      Main: { screen: Main },
      SignIn: {screen: SignIn},
      ForgotPassword: {screen:ForgotPassword},
    },
    {
      initialRouteName:'Main',
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
        this.props.navigation.navigate(userToken ? 'Home' : 'Main');
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

class HomeScreen extends Component{
    static router = HomeNavigator.router;
    render(){
        return (
        <MenuProvider>
            <HomeNavigator navigation={this.props.navigation} />
        </MenuProvider>)
    }
}


class ModalScreen extends Component{
    static router = ModalNavigator.router;
    render(){
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