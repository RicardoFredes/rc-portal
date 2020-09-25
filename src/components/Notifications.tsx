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

const AllNotifications = () => <div id={PARENT_NAME} className={PARENT_NAME} />

const addNotification = (ChildComponent, childComponentProps: object) => {
  if (notHasNotificationsWrapper) rcPortal(AllNotifications)
  const Component = ({ id, ...props }) => (
    <Notification id={id} close={props.close}>
      <ChildComponent {...props} />
    </Notification>
  )
  const parent = getNotificationsWrapper()
  return setTimeout(() => {
    return rcPortal(Component, childComponentProps, parent)
  }, 0) 
}

const Notifications = AllNotifications
Notification.open = addNotification

export { Notifications }
