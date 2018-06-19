import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';


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
    

    constructor() {
        super();
        axios.get(`http://localhost:8080/getClientDetails`)
        .then(resp => {
	    console.log('response--' + resp.data.result);
        console.log('msg--' + resp.data.status);
        console.log('status--' + resp.status);
        this.products= resp.data.result;
        console.log('status--' + this.products);
      });
       console.log('constructor  called');  
      }
    render(){
       

        return (
                <Dropdown placeholder='Select Client' fluid selection options={friendOptions} />
        );
    }
}

export default DropdownExampleSelection