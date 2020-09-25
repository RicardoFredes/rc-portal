import React from 'react'
import ReactDOM from 'react-dom'
import rcPortal, { Modal } from '../dist/index.js'

const openSimpleModal = () => rcPortal(MyPortalComponent, { title: 'My Modal' })

const openTemporyModal = () => {
  const myWrapper = document.getElementById('portal')
  const { close, parent, wrapper } = rcPortal(MyPortalComponent, { title: 'My Modal' }, myWrapper)
  const handleClose = () => {
    const isClosed = close()
    console.debug('isClosed', isClosed)
  }
  console.debug('parent', parent) // show the parent element: default is document.body
  console.debug('wrapper', wrapper) // show the parent element: default is document.body
  setTimeout(handleClose, 5000) // close the portal
}

const App = () => (
  <div>
    <button onClick={openSimpleModal}>Open Modal</button>
    <br />
    <button onClick={openTemporyModal}>Modal auto close after 5s</button>
  </div>
)

const MyPortalComponent = ({ close, title }) => (
  <Modal close={close}>
    <h3>{title}</h3>
    <p>It's so ease!</p>
    <button onClick={close}>Ok</button>
  </Modal>
)

ReactDOM.render(<App />, document.getElementById('root'))
