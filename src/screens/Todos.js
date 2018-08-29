import React from 'react'
import { View, Text, Button } from 'react-native'
// import App from '../components/App';

export default class Todos extends React.Component {
    static navigationOptions = {
        title: 'Todos',
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
      };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Edit Todo"
                    onPress={() =>
                    navigate('EditTodo', { name: 'Jane' })
                    }
                />
                <Text>lorem iasdsad adas dasdasd</Text>
            </View>
        );
    }
}