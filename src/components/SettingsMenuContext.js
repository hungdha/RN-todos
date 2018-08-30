import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
              </MenuOptions>
            </Menu>
      </View>
    );
  }
}
