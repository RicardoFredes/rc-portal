import React from 'react'
import ReactDOM from 'react-dom'

type Close = () => boolean

export interface RcPortal {
  close: Close
  parent: HTMLElement
  wrapper: HTMLElement
}

export interface RcPortalProps {
  closeDelay?: number
  duration?: number
  [props: string]: any
}

let rcportalIncrement = 0

export default function rcPortal(Component: Function, options?: RcPortalProps, parent?: HTMLElement): RcPortal {
  if (!Component) throw new Error('Must have a Component')
  const nodeParent = parent || document.body
  const wrapper = getWrapper()
  nodeParent.appendChild(wrapper)
  const { duration, closeDelay, ...props } = options || {}
  const close = () => closePortal(nodeParent, wrapper, closeDelay)
  if (duration) setTimeout(close, duration)
  ReactDOM.render(<Component close={close} {...props} />, wrapper)
  return { close, parent: nodeParent, wrapper }
}

function getWrapper(): HTMLElement {
  const wrapper = document.createElement('div')
  rcportalIncrement++
  wrapper.id = `rcportal-${rcportalIncrement}`
  return wrapper
}

function closePortal(nodeParent: HTMLElement, wrapper: HTMLElement, closeDelay: number): boolean {
  if (!nodeParent.contains(wrapper)) return false
  const removeParent = () => nodeParent.removeChild(wrapper)
  if (closeDelay) {
    wrapper.classList.add('rcportal-closing')
    setTimeout(removeParent, closeDelay)
  } else removeParent()
  return true
}
