import {
  combineReducers
} from 'redux'
import todos from './todos'
import signUp from './signUp'

export default combineReducers({
  todos,
  signUp
})