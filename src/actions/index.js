// let nextTodoId = 0
import todos from '../api/todos';


let nextTodoId = require('../api/data').length + 1;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

const receiveTodos = todos => ({
  type: 'RECEIVE_TODOS',
  todos
})


export const getAllTodos = () => dispatch => {
  todos.getTodos(todos => {
    dispatch(receiveTodos(todos))
  })
}