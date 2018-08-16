import React from 'react';
import { View } from 'react-native';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import Clock from './Clock';
// import FlatListBasics from './src/screens/FlatListBasics';
import Todos from './src/screens/Todos';

export default class App extends React.Component {
  	render() {
		return (
      		<Todos />
		);
	}
}
