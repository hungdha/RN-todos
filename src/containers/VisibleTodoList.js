import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
// import { VisibilityFilters } f/rom '../actions'


const mapStateToProps = state => (
  {
  todos: state.todos
})
const mapDispatchToProps = dispatch => ({
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)