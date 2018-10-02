import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

export default class SettingsMenuContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _logOut = () =>{
    AsyncStorage.clear(); 
    this.props.navigation.navigate('SignIn')
  }
  render() {
    return (
      <View>
        <Menu>
              <MenuTrigger>
                {this.props.children}
              </MenuTrigger>
              <MenuOptions>
                  <MenuOption onSelect={() => alert(`Edit`)} text='Edit' />
                  <MenuOption onSelect={() => this.props.navigation.navigate('Settings') } text='Options' />
                  <MenuOption onSelect={() => alert(`Show`)} text='Show' />
                  <MenuOption onSelect={() => {  this._logOut() }} text='Log out' />
              </MenuOptions>
            </Menu>
      </View>
    );
  }
}
