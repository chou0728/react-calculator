import { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { changeOp, updateDisplay, updateInput } from '../store/actions'

class NumPad extends Component {
  constructor(props) {
    super(props)
    this.handleNumPad = this.handleNumPad.bind(this)
  }
  handleNumPad(e) {
    let display = this.props.display
    let input = e.target.innerHTML
    let previousInput = this.props.input
    let newDisplay
    let arg1 = this.props.arg1

    //store the operator that was last used
    if (/[/*+-]/.test(previousInput)) {
      this.props.changeOp(previousInput)
    }
    switch (true) {
      //when display is '0'
      case /^0$/.test(display):
        input.match(/\./) ? (newDisplay = '0.') : (newDisplay = input)
        break
      //when display contains a decimal and user presses decimal button
      case /\./.test(display) && input === '.':
        arg1 === display ? (newDisplay = '0.') : (newDisplay = display)
        break
      //all other cases
      default:
        arg1 !== 0 && !/[0-9]/.test(previousInput)
          ? (newDisplay = input)
          : (newDisplay = display + input)
        break
    }
    this.props.updateDisplay(newDisplay)
    this.props.updateInput(input)
  }
  render() {
    return (
      <div id='numPad' className='calc-section'>
        <Button
          ID='seven'
          value='7'
          style={{ gridArea: 'seven' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='eight'
          value='8'
          style={{ gridArea: 'eight' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='nine'
          value='9'
          style={{ gridArea: 'nine' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='four'
          value='4'
          style={{ gridArea: 'four' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='five'
          value='5'
          style={{ gridArea: 'five' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='six'
          value='6'
          style={{ gridArea: 'six' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='one'
          value='1'
          style={{ gridArea: 'one' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='two'
          value='2'
          style={{ gridArea: 'two' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='three'
          value='3'
          style={{ gridArea: 'three' }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='zero'
          value='0'
          style={{
            gridArea: 'zero',
            alignContent: 'center',
            justifyContent: 'flex-start',
            padding: '0 30px'
          }}
          handleClick={this.handleNumPad}
        />
        <Button
          ID='decimal'
          value='.'
          style={{ gridArea: 'decimal' }}
          handleClick={this.handleNumPad}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.display,
    arg1: state.arg1,
    input: state.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDisplay: (display) => {
      dispatch(updateDisplay(display))
    },
    changeOp: (op) => {
      dispatch(changeOp(op))
    },
    updateInput: (input) => {
      dispatch(updateInput(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumPad)
