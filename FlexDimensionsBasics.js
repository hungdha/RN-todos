import React, { Component } from 'react';
import {
    AppState,
    View,
    Text,
    Button, Alert,
    ScrollView,
    Image,
    TextInput,
    Picker
} from 'react-native';

export default class FlexDimensionsBasics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
            language: 'java'
        };
    }
    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
        } else
            console.log('App has come to the background!')
        this.setState({ appState: nextAppState });
    }
    render() {
        return (
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
                    <ScrollView>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, It was popularised in the 1960s with the release of Letraset</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, It was popularised in the 1960s with the release of Letraset</Text>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, It was popularised in the 1960s with the release of Letraset</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, It was popularised in the 1960s with the release of Letraset</Text>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, It was popularised in the 1960s with the release of Letraset</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, It was popularised in the 1960s with the release of Letraset</Text>
                    </ScrollView>
                </View>

                <View style={{ flex: 1 }} >
                    <Button style={styles.button}
                        onPress={() => {
                            Alert.alert('You tapped the buttonxxxx!');
                        }}
                        title="Press Me"
                    />
                    <Text>Spec</Text>
                    <View style={{ padding: 10 }}>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', margin: 5, borderWidth: 1 }}
                            placeholder={'email'}
                            editable={false}
                        />
                        <TextInput
                            style={{ height: 40, borderColor: 'red', margin: 5, borderWidth: 1 }}
                            placeholder={'password'}
                        />
                    </View>
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />



                </View>
                <View style={{ flex: 1, backgroundColor: 'steelblue' }} >
                    <Text>Current state is: {this.state.appState}</Text>
                </View>
                <View>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="PHP" value="php" />
                    </Picker>
                    <Text>{this.state.language}</Text>
                </View>
            </ScrollView>
        );
    }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
const styles = {
    button: {
        color: '#900900',
        backgroundColor: '#188900'
    },
    text: {
        color: 'red'
    }
}
