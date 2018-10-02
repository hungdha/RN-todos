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

export default class UsersSectionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }
    async getUsers() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users?_start=1&_limit=3');
            const _users = this.convertDataUsers(response.data) ;
            // let uu = _users.map( (item)=>(item));
                // console.log(_users);
            this.setState({
                users :  _users
            })
            
            
        } catch (error) {
            console.error(error);
        }
    }
    convertDataUsers(users){

        if(users == null)
            return [];
        let _users = [];
        // response.data.map( (user, index)=>
        
        for ( let index = 0; index < users.length; index++ ) {
            let user = users[index];
            let _title = user.name.substring(0,1).toUpperCase();
            let _index = -1;
            for(let j = 0; j < _persons.length; j++){
                let p = _persons[j];
                if( p != null ){
                    if( p.title.substring(0,1).toUpperCase() == _title)
                        _index = j;
                }
            } 
            
            if(_index > -1){
                _users[_index].data.push(user.name);
            }else{
                _users[index]  = {
                    id: user.id,
                    title : _title,
                    data: [user.name]
                };
            }
            
        }
        return _users;
    }
    componentWillMount() {
        this.getUsers();
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.users}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => (<View style={styles.row}><Text style={styles.sectionHeader}>{section.title}</Text></View>)}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}