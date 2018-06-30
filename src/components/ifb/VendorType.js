/*global google*/
import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';
import {Grid} from 'semantic-ui-react';
import Vendor from './Vendor';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {FormGroup, Label } from 'reactstrap';


class VendorType extends Component {
  render() {
      return (
        <div className="col-sm-4 form-group">
            <Card className="text-left">
                <CardBody>
                    <FormGroup>
                        <Label for="exampleCheckbox">{this.props.name}</Label>
                        {this.props.vendors.map(verdor => <Vendor key={verdor.vendorId} {...verdor} />)}
                    </FormGroup>
                </CardBody>
            </Card>
      </div>
      );
  }
} 

export default VendorType;