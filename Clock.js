import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <View>
                <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#f4f4f4',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	title :{
// 		color : '#890',
// 		fontSize: 25
// 	}
// });
