import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { deleteTodo, editTodo, toggleTodo } from '../actions';

class TodoMenuContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <View>
            <Menu>
              <MenuTrigger>
                {this.props.children}
              </MenuTrigger>
              <MenuOptions>
                  <MenuOption onSelect={() => alert(`Edit`)} text='Edit' />
                  <MenuOption onSelect={this.props.onDelete} text='Delete' />                 
                  <MenuOption onSelect={this.props.onToggle} text='Completed' />
              </MenuOptions>
            </Menu>
      </View>
    );
  }
}

const mapState = (state, ownProps) => ({

});

const mapDispatch = (dispatch, ownProps) =>({
  onDelete : () => dispatch(deleteTodo(ownProps.id)) ,
  onToggle : () => dispatch(toggleTodo(ownProps.id)) 
})


export default connect(mapState,mapDispatch)(TodoMenuContext)
