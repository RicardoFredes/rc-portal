import React from 'react';
import ReactDOM from 'react-dom';
import rcPortal, { Modal } from '../dist/index.js';

class App extends React.PureComponent {
  handleClick() {
    const { close, parent } = rcPortal(MyPortalComponent);
    console.log(parent); // show the parent element
    setTimeout(close, 5000); // close the portal
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            rcPortal(MyPortalComponent, { id: 'modal', title: 'My Modal' })
          }
        >
          Open Modal
        </button>
        <br />
        <button onClick={this.handleClick.bind(this)}>
          Modal auto close after 5s
        </button>
      </div>
    );
  }
}

function MyPortalComponent({ onClose, id, title }) {
  return (
    <Modal id={id} onClose={onClose}>
      <h3>{title}</h3>
      <p>Lore ipsum on dolor...</p>
      <button onClick={onClose}>Ok</button>
    </Modal>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
