/*global google*/
import React, { Component } from 'react';
import { CustomInput } from 'reactstrap';


class Vendor extends Component {


  render() {
      return (
          <div>
            <CustomInput type="checkbox" id={this.props.vendorID} label={this.props.Name} />
          </div>
      );
  }
} 

export default Vendor;