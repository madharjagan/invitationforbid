import React, { Component } from 'react';
import SiteDetails from './SiteDetails';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {FormGroup, Label } from 'reactstrap';


class ClientSiteDetails extends Component {
  render() {
      
      return (
        <div className="col-sm-4 form-group">
            <Card className="text-left">
                <CardBody>
                    <FormGroup>
                        <Label for="exampleCheckbox">{this.props.name}</Label>
                        {this.props.property.map(client => <SiteDetails key={client.propertyID} {...client} />)}
                    </FormGroup>
                </CardBody>
            </Card>
      </div>
      );
  }
} 

export default ClientSiteDetails;