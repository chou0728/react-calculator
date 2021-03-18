import { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import {
  updateDisplay,
  changeArg1,
  changeOp,
  updateResult
} from '../store/actions'

class Tools extends Component {
  constructor(props) {
    super(props)
    this.handleTools = this.handleTools.bind(this)
  }
  handleTools(e) {
    switch (true) {
      case e.target.innerHTML === 'AC':
        //initialize the calc again
        this.props.updateDisplay('0')
        this.props.changeArg1('0')
        this.props.updateResult('')
        this.props.changeOp('')
        break
      case e.target.innerHTML === '+/-':
        this.props.updateDisplay(eval(this.props.display * -1))
        break
      case e.target.innerHTML === '%':
        this.props.updateDisplay(eval(this.props.display / 100))
        break
      default:
        console.log('problem with handleTools function')
        break
    }
  }
  render() {
    return (
      <div id='tools' className='calc-section'>
        <Button ID='clear' value='AC' handleClick={this.handleTools} />
        <Button ID='sign' value='+/-' handleClick={this.handleTools} />
        <Button ID='percent' value='%' handleClick={this.handleTools} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.display
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
    changeOp: (op) => {
      dispatch(changeOp(op))
    },
    updateResult: (result) => {
      dispatch(updateResult(result))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools)
