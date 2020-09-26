import React from 'react'
import { ComponentsProps } from './ComponentProps'
import { CloseIcon } from './CloseIcon'
import rcPortal from '../rcPortal'

let notificationParent: HTMLElement
const PARENT_NAME = 'rcportal-notification'

const initializeNotification = () => {
  notificationParent = document.createElement('div')
  notificationParent.classList.add(PARENT_NAME)
  notificationParent.id = PARENT_NAME
  document.body.append(notificationParent)
}

const Notification = ({ close, id, children }: ComponentsProps) => (
  <div id={id} className="rcportal-notification-wrapper">
    <div className="rcportal-notification-close-icon" onClick={() => close()}>
      <CloseIcon />
    </div>
    <div className="rcportal-notification-content">{children}</div>
  </div>
)

Notification.open = (ChildComponent, childComponentProps: object) => {
  if (!notificationParent) initializeNotification()
  const Component = ({ id, ...props }) => (
    <Notification id={id} close={props.close}>
      <ChildComponent {...props} />
    </Notification>
  )
  return rcPortal(Component, childComponentProps, notificationParent)
}

export { Notification }
