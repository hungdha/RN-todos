import React from 'react';
import {StyleSheet, ActivityIndicator, View} from "react-native";
import TextPlus from './TextPlus';

export default class Loading extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        
        const {isLoading, title} = this.props;
        if(isLoading){
            return (<View style={styles.loading}>
                <TextPlus style={styles.title}>{title}</TextPlus>
                <ActivityIndicator/>
            </View>)
        }else{
            return null
        }
    }    
}


const styles = StyleSheet.create({
    loading: {
        flex:1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 1,
        backgroundColor: '#202646',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:10
    },
    title:{
        color:'#FFFFFF',
        fontSize: 12
    }
})