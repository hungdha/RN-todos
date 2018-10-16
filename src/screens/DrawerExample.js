import React, {Component} from 'react';
import {View, Button, Text, Platform, ScrollView, StyleSheet,
     Image,
     TouchableHighlight} from 'react-native';
import {
    createDrawerNavigator,
    DrawerItems} from 'react-navigation';

// screens
import HomeScreen from '../screens/Home';
// import HeaderScreen from './Drawers/HeaderScreen';
import ViewPagerScreen from './Drawers/ViewPagerScreen';
import ViewPagerAndroidExample from './Drawers/ViewPagerAndroidExample';
import SecondScreen from './Drawers/SecondScreen';
import ThirdScreen from './Drawers/ThirdScreen';
import TabScreen from './Drawers/TabsScreen';

// media
import iconHambuger from '../assets/images/hambuger.png';
import khiIcon from '../assets/images/khi.png';
import hpLogo from '../assets/images/hp_logo.png';
import styles from './Drawers/styles';
import gruntLogo from '../assets/images/grunt-logo.png';
import rnLogo from '../assets/images/logo-native.png';
import homeIcon from '../assets/images/home.png';


class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
            <View
            style={{
                backgroundColor: '#f50057',
                height: 140,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <Image source={rnLogo} style={styles.logo}/>
                <Text style={{ color: 'white', fontSize: 30 }}>
                    Header
                </Text>
            </View>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home : {
            path:'',
            screen : HomeScreen,
            navigationOptions:{
                tabBarLabel: '',
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) =>{
                    return (
                        <Image
                        source={homeIcon}
                        style={[styles.icon,{tintColor: tintColor }]} />
                    )
                }
            }
        },
        First: {
            path: '/',
            screen: ViewPagerAndroidExample,
            navigationOptions: {
                tabBarLabel: 'Screen 1',
                drawerLabel: 'View Pager',
                drawerIcon: ({ tintColor }) => {
                    // console.log("tintColor = " + tintColor);
                    return (
                        <Image
                            source={khiIcon}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                    );
                }
            }
        },
        Second: {
            path: '/sent',
            screen: SecondScreen,
            navigationOptions : {
                tabBarLabel: 'Screen 2',
                drawerLabel: 'Screen 2',
                drawerIcon: ({tintColor}) => {
                    return (
                        <Image
                        source={hpLogo}
                        style={[styles.icon, {tintColor: tintColor}]}
                      />
                    );
                }
            }


        },
        Third: {
            path: '/third',
            screen: ThirdScreen,
            navigationOptions : {
                tabBarLabel : 'Screen 3',
                drawerIcon : ({tintColor}) =>{
                    return (
                        <Image source={gruntLogo}
                        style={[styles.icon, {tintColor: tintColor}]}
                        />
                    )
                }
            }
        },
        Tabs : {
            path : '/tab',
            screen : TabScreen,
             navigationOptions : {
                tabBarLabel : 'Tabs',
                drawerIcon : ({tintColor}) => {
                  return (
                    <Image
                    source={rnLogo}
                    style={[styles.icon, {tintColor: tintColor}]} />
                  )
                }
              }
        }
    },
    {
        initialRouteName: 'First',
        drawerPosition: 'left',

        // drawerWidth: 200,
        contentOptions: {
            activeTintColor: 'red',
        },
        contentComponent: DrawerContent,
        // headerMode : 'none',
    }
);

export default class DrawerExample extends React.Component{
    static router = DrawerNavigator.router;
    static navigationOptions = ({navigation, screenProps}) => {
        return{
            headerTitle: (
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems: 'center',
                }}>
                <Image source={require('../assets/images/logo-native.png')}   style={styles.logo} />
                </View>
            ),
            headerLeft : () =>{
                return (
                    <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
                        <Image source={iconHambuger}
                        style={{ width:25, height: 25, marginLeft:10}}
                        />
                    </TouchableHighlight>
                )
            },

        }
    }
    render(){
        return(
            <DrawerNavigator navigation={this.props.navigation} />
        )
    }
}
