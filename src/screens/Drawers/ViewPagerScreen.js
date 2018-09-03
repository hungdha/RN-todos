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
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import logo from '../../assets/images/logo.png';
// import InFlatListExample from '../InFlatListExample';
import contacts from '../../api/contacts.json';

var mWidth = Dimensions.get('window').width; //full width
var mHeight = Dimensions.get('window').height; //full height
const PAGES = [
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5"
];
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={[styles.row,{padding:10}]}>
                    <Text style={{
                        fontSize: 20,
                        color: 'gray'
                    }}>Contact Form</Text>
                    <View>
                        <Text> Name </Text>
                        <TextInput placeholder="Name here." />
                    </View>
                    <View>
                        <Text> Email </Text>
                        <TextInput placeholder="Email here." />
                    </View>
                    <View>
                        <Button title="Send" onPress={
                            () => alert('you have clicked button sent')
                        } />
                    </View>
                </View>
            </View>

        );
    }
}

class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={contacts}
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

class SectionListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'D', data: ['Devin'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                        { title: 'K', data: ['Karik', 'Kieu', 'Kim'] },
                        { title: 'O', data: ['Oh', 'Oanh', 'Oah'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => (<View style={styles.row}><Text style={styles.sectionHeader}>{section.title}</Text></View>)}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}


class ButtonCustom extends Component{
    _setPageIndex(){
        const {pageIndex} = this.props;
        alert("xxx: " +pageIndex)
    }
    render(){
        return (
            <Button title={this.props.title}  onPress={this._setPageIndex} />
        )
    }
}

export default class ViewPagerScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageIndex  : 0
        }
    }
    _pageSelected(event) {
        // console.log("position: " + event.nativeEvent.position)
        let {position} = event.nativeEvent;
        this.setState({
            pageIndex : position
        });
    }
    _onPageScroll(event) {
        console.log("position: " + event.nativeEvent.position)
        console.log("offset : " + event.nativeEvent.offset)
    }
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    width: mWidth, 
                    height: 50,
                    backgroundColor:'#f4f4f4',
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                    <Text>{ PAGES[this.state.pageIndex]}</Text>
                </View>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageSelected={this._pageSelected.bind(this)}
                    onPageScroll={this._onPageScroll.bind(this)}
                    scrollEnabled={true}
                    
                >
                    <View style={styles.pageStyle} key="1">
                        <Text>ScrollView</Text>
                        <ScrollView >
                            <View style={styles.row}>
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                                <Image source={logo} style={styles.StyleImageDemo} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.pageStyle} key="2">
                        <Text>Flat List</Text>
                        <FlatListBasics ></FlatListBasics>
                    </View>
                    <View style={styles.pageStyle} key="3">
                        <Text>Section List</Text>
                        <SectionListBasics ></SectionListBasics>
                    </View>
                    <View style={styles.pageStyle} key="4" >
                        <ContactForm />
                    </View>
                    <View style={styles.pageStyle} key="5" >
                        <View>
                            <Text>scr 5</Text>
                            <ButtonCustom title="page 1" pageIndex={1} />
                            <ButtonCustom title="page 2" pageIndex={2}  />
                            <ButtonCustom title="page 3" pageIndex={3}  />
                        </View>
                    </View>
                </ViewPagerAndroid>
            </View>
        )
    }
}