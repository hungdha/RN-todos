import {
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
export const DrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeScreen
    },
    Profile : {
        screen : ProfileScreen
    }
})

export const HomeNavigator = createStackNavigator({
    
});
