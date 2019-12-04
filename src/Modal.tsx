import React, { PureComponent } from 'react'

export default class Modal extends PureComponent {
  props: {
    onClose: Function
    children: any
    id: string
  }

  static defaultProps = {
    id: '_modal'
  }

  handleClick(event: Event) {
    event.stopPropagation()
  }

  render() {
    return (
      <div id={this.props.id} className="_Modal" onClick={this.props.onClose.bind(this)}>
        <div className="_ModalWrapper" onClick={this.handleClick.bind(this)}>
          <div className="_ModalCloseIcon" onClick={this.props.onClose.bind(this)} />
          <div className="_ModalContent">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}