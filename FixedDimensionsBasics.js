import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={[styles.item, {backgroundColor: 'powderblue'}] } >
          <Text>flex 1</Text>
        </View>
        <View style={[styles.item2, {backgroundColor: 'skyblue'}]} >
          <Text>flex 2</Text>
        </View>
        <View style={[styles.item, { backgroundColor: 'steelblue'}]} ><Text>flex 1</Text>
        </View>
        <View style={[styles.item3, { backgroundColor: 'grey'}]} ><Text>flex 3</Text>
        </View>
        <View style={[styles.item, { backgroundColor: 'red'}]} ><Text>flex 1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item : {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  item2:{
    flex:2
  }, item3:{
    flex:3
  }
})
