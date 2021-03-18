import React, { Component } from 'react'
import { Modal as AntModal } from 'antd'
import Draggable from 'react-draggable'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounds: { left: 0, top: 0, bottom: 0, right: 0 }
    }
    this.onStart = this.onStart.bind(this)
  }

  draggleRef = React.createRef()

  onStart(event, uiData) {
    const { clientWidth, clientHeight } = window?.document?.documentElement
    const targetRect = this.draggleRef?.current?.getBoundingClientRect()
    this.setState({
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y)
      }
    })
  }

  render() {
    return (
      <AntModal
        width={this.props.width}
        visible={this.props.visible}
        onCancel={this.props.onClose}
        closable={false}
        footer={null}
        maskClosable={true}
        modalRender={(modal) => (
          <Draggable
            disabled={this.props.disabledDrag}
            bounds={this.state.bounds}
            onStart={(event, uiData) => this.onStart(event, uiData)}
          >
            <div ref={this.draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        {this.props.children}
      </AntModal>
    )
  }
}

export default Modal
