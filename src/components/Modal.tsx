import React from 'react'

interface ModalProps {
  close(): boolean
  children: any
  id: string
}

const closeError = () => {
  throw new Error('Not found "close" function')
}

export const Modal = ({ close = closeError, children, id = '_modal' }: ModalProps) => (
  <div id={id} className="rcportal-modal" onClick={() => close()}>
    <div className="rcportal-modal-wrapper" onClick={e => e.stopPropagation()}>
      <div className="rcportal-modal-close-icon" onClick={() => close()}>
        <CloseIcon />
      </div>
      <div className="rcportal-modal-content">{children}</div>
    </div>
  </div>
)

const CloseIcon = () => (
  <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>
)
