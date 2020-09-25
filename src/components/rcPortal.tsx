import React from 'react'
import ReactDOM from 'react-dom'

export interface RcPortal {
  close(): boolean
  parent: HTMLElement
  wrapper: HTMLElement
}

export default function rcPortal(Component: Function, props = {}, parent?: HTMLElement): RcPortal {
  if (!Component) throw new Error('Must have a Component')
  const nodeParent = parent || document.body
  const wrapper = getWrapper()
  nodeParent.appendChild(wrapper)
  const close = () => closePortal(nodeParent, wrapper)
  ReactDOM.render(<Component close={close} {...props} />, wrapper)
  return { close, parent: nodeParent, wrapper }
}

function getWrapper(): any {
  const wrapper = document.createElement('div')
  wrapper.id = 'rc-portal-' + Math.ceil(Math.random() * 100)
  return wrapper
}

function closePortal(nodeParent: any, wrapper: any): boolean {
  if (!nodeParent.contains(wrapper)) return false
  nodeParent.removeChild(wrapper)
  return true
}
