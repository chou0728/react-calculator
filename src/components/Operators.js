import { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import {
  updateDisplay,
  changeArg1,
  changeArg2,
  updateInput
} from '../store/actions'

class Operators extends Component {
  constructor(props) {
    super(props)
    this.handleOperators = this.handleOperators.bind(this)
  }
  handleOperators(e) {
    let previousInput = this.props.input
    let operator = e.target.innerHTML
    let display = this.props.display
    let mathOp
    let result
    let arg1 = this.props.arg1
    let arg2 = this.props.arg2
    let op = this.props.op

    switch (true) {
      case /[+-]/.test(operator):
        mathOp = operator
        //when user inputs a new operator immediately after inputting '=' skip everything.
        if (/=/.test(previousInput)) {
          break
        }
        if (arg1 !== 0 && op !== '' && !/[/*+-]/.test(previousInput)) {
          //check to see if the previous value was '='
          result = Math.round(1000000 * eval(arg1 + op + display)) / 1000000
          this.props.changeArg1(result)
          this.props.updateDisplay(result)
        } else {
          this.props.changeArg1(display)
        }
        break
      case operator === decodeURI('%C3%B7'):
        mathOp = '/'
        if (/=/.test(previousInput)) {
          break
        }
        if (arg1 !== 0 && op !== '' && !/[/*+-]/.test(previousInput)) {
          result = Math.round(1000000 * eval(arg1 + op + display)) / 1000000

          this.props.changeArg1(result)
          this.props.updateDisplay(result)
        } else {
          this.props.changeArg1(display)
        }
        break
      case operator === 'x':
        mathOp = '*'
        if (/=/.test(previousInput)) {
          break
        }
        if (arg1 !== 0 && op !== '' && !/[/*+-]/.test(previousInput)) {
          result = Math.round(1000000 * eval(arg1 + op + display)) / 1000000
          this.props.changeArg1(result)
          this.props.updateDisplay(result)
        } else {
          this.props.changeArg1(display)
        }
        break
      case operator === '=':
        mathOp = operator
        if (arg1 !== 0 && op !== '' && !/=/.test(previousInput)) {
          result = Math.round(1000000 * eval(arg1 + op + display)) / 1000000
          this.props.changeArg1(result)
          this.props.changeArg2(display)
          this.props.updateDisplay(result)
        } else if (arg1 !== 0 && op !== '' && /=/.test(previousInput)) {
          result = Math.round(1000000 * eval(arg1 + op + arg2)) / 1000000
          this.props.changeArg1(result)
          this.props.updateDisplay(result)
        } else {
          this.props.changeArg1(display)
        }
        break
      default:
        console.log('this is the default case for the operator type')
        break
    }
    this.props.updateInput(mathOp)
  }

  render() {
    return (
      <div id='operators' className='calc-section'>
        <Button ID='divide' value='&#247;' handleClick={this.handleOperators} />
        <Button ID='multiply' value='x' handleClick={this.handleOperators} />
        <Button ID='subtract' value='-' handleClick={this.handleOperators} />
        <Button ID='add' value='+' handleClick={this.handleOperators} />
        <Button ID='equals' value='=' handleClick={this.handleOperators} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
    arg1: state.arg1,
    arg2: state.arg2,
    op: state.op,
    input: state.input
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplay: (display) => {
      dispatch(updateDisplay(display))
    },
    changeArg1: (arg1) => {
      dispatch(changeArg1(arg1))
    },
    changeArg2: (arg2) => {
      dispatch(changeArg2(arg2))
    },
    updateInput: (input) => {
      dispatch(updateInput(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operators)
