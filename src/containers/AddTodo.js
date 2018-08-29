import React from 'react'
import { View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	handleAddTodo(event) {
		let { dispatch } = this.props;
		dispatch(addTodo(this.state.text));
		this.setState({text:''})
	}
	render() {
		return (
			<View>
				<TextInput placeholder="Enter text todo..."
					 onChangeText={(text) => this.setState({text})}
					 value={this.state.text}
				/>
				<Button title="Add Todo" onPress={this.handleAddTodo.bind(this)} disabled={ this.state.text ? false : true } />
			</View>
		)
	}
}

export default connect()(AddTodo)