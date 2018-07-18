/*global google*/
import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';
import {Grid} from 'semantic-ui-react';
import Vendor from './Vendor';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {FormGroup, Label } from 'reactstrap';


class VendorType extends Component {
    constructor() {
    super();
    this.state = { 
        selectedVendors: new Set()
    };
    this.handleChange = this.handleChange.bind(this);
    }

    toggleCheckbox = label => {
    if (this.state.selectedVendors.has(label)) {
        this.state.selectedVendors.delete(label);
    } else {
        this.state.selectedVendors.add(label);
    }
    }

    handleChange(evt) {
    console.log(this.state.selectedVendors);
    this.toggleCheckbox(parseInt(evt.target.id));
    console.log(this.state.selectedVendors);
    }
  render() {
      return (
        <div className="col-sm-4 form-group">
            <Card className="text-left">
                <CardBody>
                    <FormGroup>
                        <Label for="exampleCheckbox">{this.props.name}</Label>
                        {this.props.vendors.map(vendor => <Vendor selectedVendors = {this.state.selectedVendors} handleChange = {this.handleChange}key={vendor.vendortypeId} {...vendor} />)}
                    </FormGroup>
                </CardBody>
            </Card>
      </div>
      );
  }
} 

export default VendorType;