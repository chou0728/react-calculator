import { Component } from 'react'
import './App.scss'
import Calculator from './components/Calculator'
import Modal from './components/Modal'
import Button from './components/Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculatorVisible: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal() {
    this.setState({ calculatorVisible: true })
  }

  closeModal() {
    this.setState({ calculatorVisible: false })
  }

  render() {
    return (
      <div id='app'>
        <Button
          value='Open Calculator'
          style={{
            background: 'black',
            fontSize: '16px',
            width: '200px',
            marginTop: '200px'
          }}
          handleClick={this.openModal}
        />
        <Modal visible={this.state.calculatorVisible} onClose={this.closeModal}>
          <Calculator />
        </Modal>
      </div>
    )
  }
}

export default App
