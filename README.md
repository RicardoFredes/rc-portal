# React Portal

Demo: https://ricardofredes.github.io/react-portal-component/samples/

`npm i --save rc-portal` or `yarn add rc-portal`

Portal react is a solution for who need show components with a short cicle life:
- Modal
- Notifications
- Tooltip
_ Print elements


## How to use

The interface to use the rc-portal is very simple:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import portal from '../dist/index.js';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          onClick={() => portal(MyPortalComponent)}
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

You can pass props when call to your portal component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import portal from '../dist/index.js';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          onClick={() => portal(MyPortalComponent, { title: 'It's awesome!' })}
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

