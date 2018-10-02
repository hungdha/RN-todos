import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Contacts from 'react-native-contacts';
const HEAD_NUMBERS =
{
	//MobiFone
	"0120": "070",
	"0121": "079",
	"0122": "077",
	"0126": "076",
	"0128": "078",
	//VinaPhone
	"0123": "083",
	"0124": "084",
	"0125": "085",
	"0127": "081",
	"0129": "082",
	//Viettel
	"0162": "032",
	"0163": "033",
	"0164": "034",
	"0165": "035",
	"0166": "036",
	"0167": "037",
	"0168": "038",
	"0169": "039",
	// Vietnamobile
	"0186": "056",
	"0188": "058",
	// Gmobile
	"0199": "059"
}


export default class ContactsScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Contacts',
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			contacts: []
		};

	}
	add() {
		this.props.navigation.navigate('AddContactScreen');
		/*
		var newPerson = {
			emailAddresses: [{
				label: "work",
				email: "mrniet11@example.com",
			}],
			familyName: "Ni ke",
			givenName: "Fric h1",
			phoneNumbers: [{
				label: 'mobile',
				number: '111222333'
			}]
		}

		Contacts.addContact(newPerson, (err) => {
			if (err) throw err;
			alert('save successful');
		})
		*/
	}
	refresh() {
		this.loadAll();
	}

	loadAll() {
		Contacts.getAll((err, contacts) => {
			if (err) throw err;
			this.setState({
				contacts: contacts
			})
		})
	}
	update(contact) {
		const numbers = contact.phoneNumbers;
		let has11numbers = false;
		for( let i = 0; i < numbers.length; i++){
			let number = numbers[i].number.replace(/\D/g, '');
			if(number.length == 11){
				contact.phoneNumbers[i].number = this.getNewHeadNumbers(number) + number.substring(4);
				has11numbers = true;
			}
		}
		if(has11numbers){
			Contacts.updateContact(contact, (err) => {
				if (err) throw err;
				// record updated
				alert('record updated')
			})
		}else
			console.log('nothing update')
	}
	componentDidMount() {
		this.loadAll();
	}

	delete(contact) {
		Contacts.deleteContact(contact, (err, recordId) => {
			if (err) throw err;
			// contact deleted
			alert('contact deleted')
		})
	}
	getNewHeadNumbers(number) {
		var head = number.replace(/\D/g, '').substring(0, 4);
		return HEAD_NUMBERS[head];
	}
	renderNewPhoneNumber(number) {
		const num = this.getNewHeadNumbers(number);
		if (num != undefined)
			return (<Text>New: 
				{num + number.substring(4)}
			</Text>)
		return null
	}
	render() {

		return (
			<View style={{ flex: 1 }}>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, marginRight: 10 }} >
						<Button title="Add new contact" onPress={this.add.bind(this)} />
					</View>
					<View style={{ flex: 1, marginRight: 10 }} >
						<Button title="Refresh" onPress={this.refresh.bind(this)} />
					</View>
				</View>
				<FlatList
					data={this.state.contacts}
					renderItem={({ item }) => (
						<View key={item.recordID} style={{ borderWidth: 1, borderBottomColor: '#ffffff' }}>
							<Text style={{ fontSize: 20, color: 'red' }}>{item.familyName} {item.givenName}</Text>
							{
								item.phoneNumbers.map(
									(phone) => (
										<View key={phone.id}>
											<Text>Old: {phone.number}</Text>
											{ this.renderNewPhoneNumber(phone.number)}
										</View>
									)
								)
							}
							<View style={{ flexDirection: 'row' }}>
								<View style={{ flex: 1, marginRight: 10 }} >
									<Button onPress={() => this.update(item)} title="Update" />
								</View>
								<View style={{ flex: 1, marginRight: 10 }} >
									<Button onPress={() => this.delete(item)} title="Delete" />
								</View>
							</View>
						</View>
					)}
				/>
			</View>
		);
	}
}
