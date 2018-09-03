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

    handleNavigation(res){
        // const {text} = event.target.value;
        const { navigate } = this.props.navigation;
        navigate('EditTodo', { name: res.name });
    }
    render() {
        const resources = [
            {id: 1, name: "item 1"},
            {id: 2, name: "item 2"},
            {id: 3, name: "item 3"},
            {id: 4, name: "item 4"},
            {id: 5, name: "item 5"}
        ]
        return (
            <View>
                {
                    resources.map( (res, index ) =>  (
                        <View key={res.id}>
                            <Text>{res.name}</Text>  
                            <Button onPress={this.handleNavigation(res)} title="Edit"  />      
                        </View>
                    ))
                }
            </View>
        );
    }
}