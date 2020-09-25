import React from 'react'
import { ComponentsProps } from './ComponentProps'
import { CloseIcon } from './CloseIcon'
import rcPortal from '../rcPortal'

const Notification = ({ close, id, children }: ComponentsProps) => (
  <div id={id} className="rcportal-notification">
    <div className="rcportal-notification-close-icon" onClick={() => close()}>
      <CloseIcon />
    </div>
    <div className="rcportal-notification-content">{children}</div>
  </div>
)

const PARENT_NAME = 'rcportal-all-notifications'

const getNotificationsWrapper = () => document.getElementById(PARENT_NAME)
const notHasNotificationsWrapper = () => !getNotificationsWrapper()

const Notifications = () => <div id={PARENT_NAME} className={PARENT_NAME} />

Notifications.open = (ChildComponent, childComponentProps: object) => {
  if (notHasNotificationsWrapper) rcPortal(Notifications)
  const Component = ({ id, ...props }) => (
    <Notification id={id} close={props.close}>
      <ChildComponent {...props} />
    </Notification>
  )
  const parent = getNotificationsWrapper()
  return rcPortal(Component, childComponentProps, parent)
}

export { Notifications }
