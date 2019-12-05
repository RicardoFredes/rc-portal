import React from 'react';
import ReactDOM from 'react-dom';

export default function portal(
  Component: Function,
  props: object = {},
  parent?: any
): object {
  if (!Component) return { error: 'Must have a Component' };
  const nodeParent = parent || document.body
  const wrapper = getWrapper();
  nodeParent.appendChild(wrapper);
  const close = () => closePortal(nodeParent, wrapper)
  ReactDOM.render(<Component close={close} {...props} />, wrapper);
  return { close, parent: wrapper };
}

function getWrapper(): any {
  const wrapper = document.createElement('div');
  wrapper.id = 'rc-portal-' + Math.ceil(Math.random() * 100)
  return wrapper
}

function closePortal(nodeParent: any, wrapper: any): boolean {
  if (!nodeParent.contains(wrapper)) return false
  nodeParent.removeChild(wrapper)
  return true;
}
