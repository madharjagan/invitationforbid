import React, { Component } from 'react';
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

var axios = require('axios');
class DropdownExampleSelection extends Component {
    render(){
            return (
        <Dropdown placeholder='Select Client' fluid selection options={friendOptions} />
        );
    }
}

export default DropdownExampleSelection