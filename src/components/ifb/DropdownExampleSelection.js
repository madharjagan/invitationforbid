import React, { Component } from 'react';
import './style.css';
import { Form } from 'semantic-ui-react'

class DropdownExampleSelection extends Component {
    constructor(props) {
        super(props);
         this.state = {
          selectedClient:''
        };
        this.handleChangeClient = this.handleChangeClient.bind(this);
        this.fetchClient = this.fetchClient.bind(this);
    }   

    handleChangeClient = (e) => {
        console.log('handleChangeClient called' + e.target.value);
        e.persist();
        this.setState({
            selectedClient: e.target.value
            });
        //this.props.handleChangeClient(this.state.selectedClient);
    }; 

    fetchClient() {
         console.log('fetchClient in selection' + this.state.selectedClient);
     this.props.fetchClient(this.state.selectedClient);
    }
    
    render(){
       
        var clientNames = this.props.clientNames.map((client) =>
                <option key={client}>{client}</option>
            );
       return (
       <Form id="selectForm" onSubmit={this.fetchClient}>
         <div>
             <select onChange={(e) => this.handleChangeClient(e,this.props.clientNames)}>
                 <option class="option">Select</option>
                    {clientNames}
             </select>
         </div>
        </Form>
        )
  }
}

export default DropdownExampleSelection