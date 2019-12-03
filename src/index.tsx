import React from 'react'
import ReactDOM from 'react-dom'

export default function portal(Component: Function, props: object = {}): object {
  if (!Component) return { error: 'Must have a Component' }
  const parent = document.createElement('div')
  document.body.appendChild(parent)
  function close() {
    document.body.removeChild(parent)
  }
  ReactDOM.render(<Component onClose={close} {...props} />, parent)
  return { close, parent }
}