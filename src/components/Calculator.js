import { Component } from 'react'
import { connect } from 'react-redux'
import Display from './Display'
import Tools from './Tools'
import Operators from './Operators'
import NumPad from './NumPad'

class Calculator extends Component {
  render() {
    return (
      <div className='calculator-wrapper'>
        <div className='calculator'>
          <Display display={this.props.display} />
          <div className='item' id='calc-layout'>
            <Tools />
            <Operators />
            <NumPad />
          </div>
        </div>
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
    result: state.result,
    input: state.input
  }
}
export default connect(mapStateToProps, null)(Calculator)
