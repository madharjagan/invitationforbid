import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
{
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
},
{
    text: 'Jagan',
    value: 'Jagan   ',
    image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
},
]

const DropdownExampleSelection = () => (
  <Dropdown placeholder='Select Client' fluid selection options={friendOptions} />
)

export default DropdownExampleSelection