import { DISPLAY, ARG1, ARG2, OP, RESULT, INPUT } from './actionTypes'

export const updateDisplay = (display) => {
  return {
    type: DISPLAY,
    display: display
  }
}
export const changeArg1 = (arg1) => {
  return {
    type: ARG1,
    arg1: arg1
  }
}
export const changeArg2 = (arg2) => {
  return {
    type: ARG2,
    arg2: arg2
  }
}
export const changeOp = (op) => {
  return {
    type: OP,
    op: op
  }
}
export const updateResult = (result) => {
  return {
    type: RESULT,
    result: result
  }
}
export const updateInput = (input) => {
  return {
    type: INPUT,
    input: input
  }
}
