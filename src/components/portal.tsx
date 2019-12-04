import React from 'react';
import ReactDOM from 'react-dom';

export default function portal(
  Component: Function,
  props: object = {},
  wrapper: any
): object {
  if (!Component) return { error: 'Must have a Component' };
  const parent = wrapper || document.createElement('div');
  document.body.appendChild(parent);
  const close = () => {
    if (document.body.contains(parent)) document.body.removeChild(parent);
  }
  ReactDOM.render(<Component onClose={close} {...props} />, parent);
  return { close, parent };
}
