# React Portal

Demo: https://ricardofredes.github.io/react-portal-component/samples/

```npm i rc-portal```
or 
```yarn add rc-portal```

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
import portal from 'rc-portal';

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

You can pass props when calling your portal component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import portal from 'rc-portal';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          onClick={() => portal(MyPortalComponent, { title: "It's awesome!" })}
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
