// import PropTypes from 'prop-types'

import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import ActionLink from '../containers/ActionLink';
import PropTypes from 'prop-types';
import Icon from '../assets/images/threedots.png';

import TodoMenuContext from './TodoMenuContext';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  SampleFunction() {
    Alert.alert('title', 'mmmm');
  }
  SampleFunction2() {
    Alert.alert('2222', '2222');
  }
  dragRow(){
    console.log('drag a row');
  }
  render() {
    let bgColor = (this.props.id % 2 == 0) ? '#f3f3f3' : '#ffffff';
    return (
      <View style={{  paddingTop: 15, paddingBottom: 15, backgroundColor: bgColor, height:200, position:'relative'}}
        onPress={this.props.onPress} >
        <TouchableOpacity onLongPress={this.SampleFunction2} activeOpacity={0.6} style={{height:60}} >
          <View>
            <Text style={this.props.completed ? { 'color': 'red', paddingLeft:10, } : { 'color': 'blue', paddingLeft:10, }}>{this.props.text}</Text>
          </View>
        </TouchableOpacity>
        <TodoMenuContext id={this.props.id}>
          <Image source={Icon} style={{ width: 30, height: 30 }} />
        </TodoMenuContext>
      </View>
    );
  }
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}