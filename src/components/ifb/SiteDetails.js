import React, { Component } from 'react';
import { CustomInput } from 'reactstrap';


class SiteDetails extends Component {

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
            <CustomInput name = {this.props.name} type="checkbox" id={this.props.propertyID} 
            label={this.props.street_number + ","+ this.props.route + " " + this.props.locality} 
            value={this.props.street_number + ","+ this.props.route + " " + this.props.locality} 
            checked={this.state.checkboxChecked}
            onChange={this.handleChange}/>
          </div>
      );
  }
} 

export default SiteDetails;