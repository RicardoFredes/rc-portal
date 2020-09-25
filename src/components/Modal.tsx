import React, { PureComponent } from 'react'

export class Modal extends PureComponent {
  props: {
    close: Function
    children: any
    id: string
  }

  static defaultProps = {
    id: '_modal',
    close: () => console.error(new Error('Must have a close Function')),
  }

  handleClick(event: Event) {
    event.stopPropagation()
  }

  render() {
    return (
      <div id={this.props.id} className="_Modal" onClick={this.props.close.bind(this)}>
        <div className="_ModalWrapper" onClick={this.handleClick.bind(this)}>
          <div className="_ModalCloseIcon" onClick={this.props.close.bind(this)} />
          <div className="_ModalContent">{this.props.children}</div>
        </div>
      </div>
    )
  }
}
