import React from 'react';
import { YellowBox } from 'react-native';
console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: ...']);

// import FixedDimensionsBasics from './FixedDimensionsBasics';
// import FlexDimensionsBasics from './FlexDimensionsBasics';
// import Clock from './Clock';
// import FlatListBasics from './src/screens/FlatListBasics';
// import Todos from './src/screens/Todos';
import AppScreen from './screens/App';
// import DrawerNav from './src/screens/DrawerNav';
// import DrawerExample from './src/screens/DrawerExample';
// import InFlatListExample from './src/screens/InFlatListExample';

export default class App extends React.Component {
       render() {
  		    return (
        		<AppScreen />
    		);
  	}
}
