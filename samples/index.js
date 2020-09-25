import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, Notifications } from '../dist/index.js'

const openModal = props => Modal.open(ChildModalComponent, props)

const openNotification = ({ duration, props }) => {
  const { close } = Notifications.open(ChildNotificationComponent, props)
  if (duration) setTimeout(close, duration)
}

const ChildModalComponent = ({ close, title }) => (
  <>
    <h3>{title}</h3>
    <p>It's so ease!</p>
    <button onClick={close}>Ok</button>
  </>
)

const ChildNotificationComponent = () => <p>Notification - time: {Date.now()}</p>

const App = () => (
  <div>
    <button onClick={() => openModal({ title: 'My Modal' })}>Open Modal</button>
    <br />
    <button onClick={() => openNotification({ duration: 3000 })}>Open Notification</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
