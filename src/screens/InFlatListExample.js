import React, { Component } from 'react';
import { FlatList, Alert, StyleSheet } from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';

const data = new Array(10)
  .fill(0)
  .map((a, i) => ({ key: '' + i, value: 'item' + i }));

export default class InFlatListExample extends Component {

  handleSelectMenu(value){
    Alert.alert(value)
  }  
  render() {
    return (
      <MenuProvider style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Menu onSelect={this.handleSelectMenu.bind(this)}>
              <MenuTrigger text={'Select option ' + item.value} />
              <MenuOptions>
                <MenuOption value="A asd a" text="A dasdasdsad asd" />
                <MenuOption value="Ba dasd" text="as das dasd B" />
                <MenuOption value="Ca sdad asd" text="C asda dasd sd" />
            </MenuOptions>
          </Menu>
          )}
          style={{ height: 200 }}
        />
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});