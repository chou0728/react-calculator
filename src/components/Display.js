import { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <div className='item' id='display'>
        {this.props.display}
      </div>
    )
  }
}

export default Display
