import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, Notification } from '../dist/index.js'

const openModal = props => Modal.open(ChildModalComponent, props)

const openNotification = props => {
  const options = { closeDelay: 200, ...props }
  Notification.open(ChildNotificationComponent, options)
}

const ChildModalComponent = ({ close, title }) => (
  <>
    <h3>{title}</h3>
    <p>It's so ease!</p>
    <button onClick={close}>Ok</button>
  </>
)

const ChildNotificationComponent = () => <div>Notification - time: {Date.now()}</div>

const App = () => (
  <div>
    <button onClick={() => openModal({ title: 'My Modal' })}>Open Modal</button>
    <br />
    <button onClick={() => openNotification({ duration: 2000 })}>Open Notification</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
