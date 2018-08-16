import _todos from './data.json'

const TIMEOUT = 100

export default {
  getTodos: (cb, timeout) => setTimeout(() => cb(_todos), timeout || TIMEOUT),
}