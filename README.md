# rcPortal
The easy react typescript solution for creating temporary components

See example: https://ricardofredes.github.io/rc-portal/samples/

```bash
yarn add rc-portal
```

## Release 2.3.0
- add Notification component
- add css to notification
- add options: `closeDelay` and `duration`

## When to use

Portal react is a solution for those who need to show components with a short life cycle. Example:
- Modal (included)
- Notifications (included)
- Tooltip
- Print elements


## How to use

To use the rc-portal is very simple:

```jsx
import React from 'react'
import rcPortal from 'rc-portal'

export default () => (
  <button onClick={() => rcPortal(MyPortalComponent)}>
    Open my portal component
  </button>
)

const MyPortalComponent = ({ close }) => (
  <div>
    <h3>Hello Portal!</h3>
    <button onClick={close}>Ok</button>
  </div>
)

```

or use Modal from rc-portal. This choice uses the wrapper Modal component (consider you to see the example above).

```jsx
import React from 'react'
import { Modal } from 'rc-portal'

export default () => (
  <button onClick={() => Modal.open(MyPortalComponent)}>
    Open my portal component
  </button>
)

const MyPortalComponent = ({ close }) => (
  <>
    <h3>Hello Portal!</h3>
    <button onClick={close}>Close</button>
  </>
)

```

You can pass props when calling your portal component:

```jsx
import React from 'react'
import { Modal } from 'rc-portal'

const props = {
  title: 'The rc-portal is awesome!'
}

export default () => (
  <button onClick={() => Modal.open(MyPortalComponent, props)}>
    Open my portal component
  </button>
)

const MyPortalComponent = ({ close, title }) => (
  <>
    <h3>{title}</h3>
    <button onClick={close}>Close</button>
  </>
)

```

## How to work

```jsx
rcPortal(MyComponent, options, parent)
```

```jsx
const MyComponent = ({ close, ...props }) => null
```

- options receive component props and the options: `closeDelay` and `duration`
  - closeDelay: miliseconds to execute the close event
  - duration: miliseconds after to execute the close event


The function rcPortal return a object: `{ close, parent, wrapper }` 
- close: Function
- parent: DOM Element
- wrapper: DOM Element created to each rcPortal

```jsx
import React from 'react'
import { Notification } from 'rc-portal'

const openPortal = () => {
  const { close, parent, wrapper } = Notification.open(MyPortalComponent)
  console.log(parent)     // show the parent element
  console.log(wrapper)    // show the wrapper element inside parent element
  setTimeout(() => {
    const isClosed = close()
    console.log(isClosed) // show true if portal is closed
  }, 3000)
}

export default () => (
  <button onClick={openPortal}>
    Open Modal
  </button>
)

const MyPortalComponent = () => <h3>Notification</h3>

```

You can define your own parent DOM:

```jsx
import React from 'react'
import { Modal } from 'rc-portal'

const props = {
  title: 'The rc-portal is awesome!'
}

const openModal = (options) => {
  const myParent = document.creatElement('div')
  document.body.append(myParent)
  const { parent } = Modal.open(MyPortalComponent, options)
  console.debug('parent', parent) // is myParent
} 

const MyPortalComponent = ({ close, title }) => <h3>{title}</h3>

export default () => (
  <button onClick={() => openModal(props)}>
    Open my portal component
  </button>
)


```

# Inseption portal
Sometimes it is necessary to make a group of notifications, for example.
In this case, you can call a main portal and use its return wrapper to create other portals.

# Batteries
The rc-portal will include some basic components for use. See what is already included so far:
- Modal
- Notification

```jsx
import rcPortal, { Modal, Notification } from 'rc-portal'
```
