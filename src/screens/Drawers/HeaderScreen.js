import React, { Component } from 'react';
import { View, Text } from 'react-native';
import coverSrc from '../../assets/images/bg1.jpg';
export default class HeaderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height:200, backgroundColor:'blue'}}>
        <Image source={coverSrc} />
        <Text> admin /quaizAdm@exmpale.com </Text>
      </View>
    );
  }
}
