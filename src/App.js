import { Component } from 'react'
import './App.scss'
import Calculator from './components/Calculator'
import Modal from './components/Modal'
import Button from './components/Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculatorVisible: false,
      disabledDrag: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.disabledMobileDrag = this.disabledMobileDrag.bind(this)
  }
  openModal() {
    this.setState({ calculatorVisible: true })
  }

  closeModal() {
    this.setState({ calculatorVisible: false })
  }

  disabledMobileDrag() {
    if (window.screen.width < 768) {
      this.setState({ disabledDrag: true })
      return
    }
    this.setState({ disabledDrag: false })
  }

  componentDidMount() {
    this.disabledMobileDrag()
    window.onresize = () => {
      this.disabledMobileDrag()
    }
  }

  render() {
    return (
      <div className='app'>
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
        <Modal
          width={'100%'}
          disabledDrag={this.state.disabledDrag}
          visible={this.state.calculatorVisible}
          onClose={this.closeModal}
        >
          <Calculator />
        </Modal>
      </div>
    )
  }
}

export default App
