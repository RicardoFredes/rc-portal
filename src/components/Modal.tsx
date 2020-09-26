import React from 'react'
import { CloseIcon } from './CloseIcon'
import { ComponentsProps } from './ComponentProps'
import rcPortal from '../rcPortal'

const closeError = () => {
  throw new Error('Not found "close" function')
}

const Modal = ({ close = closeError, children, id = '_modal' }: ComponentsProps) => (
  <div id={id} className="rcportal-modal" onClick={() => close()}>
    <div className="rcportal-modal-wrapper" onClick={e => e.stopPropagation()}>
      <div className="rcportal-modal-close-icon" onClick={() => close()}>
        <CloseIcon />
      </div>
      <div className="rcportal-modal-content">{children}</div>
    </div>
  </div>
)

Modal.open = (ChildComponent, childComponentProps: object) => {
  const Component = ({ id, ...props }) => (
    <Modal id={id} close={props.close}>
      <ChildComponent {...props} />
    </Modal>
  )
  return rcPortal(Component, childComponentProps)
}

export { Modal }
