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
    // console.log(' checkbox checked action called ' + evt.target.value)
    this.setState({ checkboxChecked: evt.target.checked });
  }
  render() {
    
      return (
          <div>
            <CustomInput type="checkbox" id={this.props.propertyID} label={this.props.street_number + ","+ this.props.route + " " + this.props.locality} 
            checked={this.state.checkboxChecked}
            onChange={this.handleChange}/>
          </div>
      );
  }
} 

export default SiteDetails;