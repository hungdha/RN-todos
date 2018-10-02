import React, { Component } from 'react';
import {
    Text,
    View,
    ViewPagerAndroid,
    Image,
    TextInput,
    Button,
    FlatList,
    SectionList,
    StyleSheet, ScrollView,
    Dimensions
} from 'react-native';
import styles from './styles';

import axios from 'axios';

// import users from '../../api/contacts.json';
class UsersFlatList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    async getUsers() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          console.log(response);
          this.setState({
              users: response.data
          })
        } catch (error) {
          console.error(error);
        }
      }
    componentWillMount(){
        this.getUsers();
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.users}
                    renderItem={
                        ({ item }) =>
                            (<View style={styles.row}>
                                <Text style={styles.item}>{item.id} - {item.name}</Text>
                            </View>)
                        }
                />
            </View>
        );
    }
}

export default UsersFlatList