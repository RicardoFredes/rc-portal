# React Portal

Demo: https://ricardofredes.github.io/rc-portal/samples/

```
npm i rc-portal
```
or 
```
yarn add rc-portal
```

Portal react is a solution for those who need to show components with a short life cycle. Example:
- Modal
- Notifications
- Tooltip
- Print elements


## How to use

To use the rc-portal is very simple:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import rcPortal from 'rc-portal';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          onClick={() => rcPortal(MyPortalComponent)}
        >
          Open Modal
        </button>
      </div>
    );
  }
}

function MyPortalComponent({ onClose }) {
  return (
    <div>
      <h3>Hello Portal!</h3>
      <button onClick={onClose}>Ok</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

You can pass props when calling your portal component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import rcPortal from 'rc-portal';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          onClick={() => rcPortal(MyPortalComponent, { title: "It's awesome!" })}
        >
          Open Modal
        </button>
      </div>
    );
  }
}

function MyPortalComponent({ onClose, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={onClose}>Ok</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

The function rcPortal return a object: `{ parent, close }` 
- parent: DOM Element
- close: Function

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import rcPortal from 'rc-portal';

class App extends React.PureComponent {
  handleClick() {
    const { close, parent } = rcPortal(MyPortalComponent)
    console.log(parent)     // show the parent element
    setTimeout(close, 5000) // close the portal
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Open Modal
        </button>
      </div>
    );
  }
}

function MyPortalComponent({ onClose }) {
  return (
    <div>
      <h3>My Portal</h3>
      <button onClick={onClose}>Ok</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
