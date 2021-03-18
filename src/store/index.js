import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
  display: '0',
  arg1: '0',
  arg2: '0',
  op: '',
  result: '',
  input: ''
}

const store = createStore(reducer, initialState)

export default store
