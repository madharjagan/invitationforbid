import React, { Component } from 'react';
import './style.css';

class DropdownExampleSelection extends Component {
    constructor(props) {
        super(props);
        
    }    
    render(){
        var clientNames = this.props.clientNames.map((client) =>
                <option key={client}>{client}</option>
            );
       return (
         <div>
             <select placeholder='Vendors'>
                 <option class="option">Select</option>
                    {clientNames}
             </select>
         </div>
        )
  }
}

export default DropdownExampleSelection