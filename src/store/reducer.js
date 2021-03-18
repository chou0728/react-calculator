import { DISPLAY, ARG1, ARG2, OP, RESULT, INPUT } from './actionTypes'

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY:
      return Object.assign({}, state, { display: action.display })
    case ARG1:
      return Object.assign({}, state, { arg1: action.arg1 })
    case ARG2:
      return Object.assign({}, state, { arg2: action.arg2 })
    case OP:
      return Object.assign({}, state, { op: action.op })
    case RESULT:
      return Object.assign({}, state, { result: action.result })
    case INPUT:
      return Object.assign({}, state, { input: action.input })
    default:
      return state
  }
}

export default reducer
