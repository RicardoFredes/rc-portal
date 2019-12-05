import React from 'react';
import ReactDOM from 'react-dom';
import rcPortal, { Modal } from '../dist/index.js';

class App extends React.PureComponent {
  handleClick() {
    const myWrapper = document.getElementById('portal');
    const { close, parent } = rcPortal(MyPortalComponent, {}, myWrapper);
    console.log(parent); // show the parent element: default is document.body
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

function MyPortalComponent({ close, id, title }) {
  return (
    <Modal id={id} close={close}>
      <h3>{title}</h3>
      <p>Lore ipsum on dolor...</p>
      <button onClick={close}>Ok</button>
    </Modal>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
