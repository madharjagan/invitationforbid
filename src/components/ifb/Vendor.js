import React, { Component } from 'react';
import { CustomInput } from 'reactstrap';


class Vendor extends Component {


  render() {
      return (
          <div>
            <CustomInput type="checkbox" id={this.props.vendorId} label={this.props.vendorName} />
          </div>
      );
  }
} 

export default Vendor;