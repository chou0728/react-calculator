import { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div
        className='calc-button'
        style={this.props.style}
        id={this.props.ID}
        onClick={this.props.handleClick}
      >
        {this.props.value}
      </div>
    )
  }
}

export default Button
