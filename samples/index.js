import React from 'react';
import ReactDOM from 'react-dom';
import portal, { Modal } from '../dist/index.js';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <button onClick={() => portal(MyModal, { id: 'modal' })}>
          Open Modal
        </button>
      </div>
    );
  }
}

function MyModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h3>My Modal</h3>
      <p>Lore ipsum on dolor...</p>
      <button onClick={onClose}>Ok</button>
    </Modal>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
