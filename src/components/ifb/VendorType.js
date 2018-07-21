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
        selectedVendorNames: new Set()
    };
    this.handleChange = this.handleChange.bind(this);
    }

    toggleCheckbox = label => {
        if (this.state.selectedVendorNames.has(label)) {
            this.state.selectedVendorNames.delete(label);
        } else {
            this.state.selectedVendorNames.add(label);
        }
    }

    handleChange(evt) {
        console.log(this.state.selectedVendorNames);
        this.toggleCheckbox(evt.target.value);
        this.props.updateVendorName(this.state.selectedVendorNames)
        
    }
  render() {
      return (
        <div className="col-sm-4 form-group">
            <Card className="text-left">
                <CardBody>
                    <FormGroup>
                        <Label for="exampleCheckbox">{this.props.name}</Label>
                        {this.props.vendors.map(vendor => <Vendor selectedVendorNames={this.state.selectedVendorNames}  handleChange={this.handleChange} key={vendor.vendortypeId} {...vendor} />)}
                    </FormGroup>
                </CardBody>
            </Card>
      </div>
      );
  }
} 

export default VendorType;