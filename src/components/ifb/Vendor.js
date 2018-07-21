import React, { Component } from 'react';
import { CustomInput } from 'reactstrap';


class Vendor extends Component {

  constructor() {
    super();
    this.state = { 
          checkboxChecked: false 
    };
    
    this.handleChange = this.handleChange.bind(this);
  }


   handleChange(evt) {
    this.setState({ checkboxChecked: evt.target.checked});
    this.props.handleChange(evt);
  }


  render() {
      return (
          <div>
            <CustomInput type="checkbox" id={this.props.vendorId} 
            label={this.props.vendorName}
            value={this.props.vendorName}
            checked={this.state.checkboxChecked}
            onChange={this.handleChange}/>
          </div>
      );
  }
} 

export default Vendor;