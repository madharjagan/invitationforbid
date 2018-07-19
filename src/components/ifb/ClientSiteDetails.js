import React, { Component } from 'react';
import SiteDetails from './SiteDetails';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {FormGroup, Label } from 'reactstrap';


class ClientSiteDetails extends Component {

    constructor() {
        super();
        this.state = { 
            selectedCheckboxes: new Set()
        };
        this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {
        this.props.updateClientSite(this.state.selectedCheckboxes);
      }

    toggleCheckbox = label => {
        if (this.state.selectedCheckboxes.has(label)) {
            this.state.selectedCheckboxes.delete(label);
        } else {
            this.state.selectedCheckboxes.add(label);
        }
      }

       handleChange(evt) {
        this.toggleCheckbox(parseInt(evt.target.id));
        this.props.updateClientSite(this.state.selectedCheckboxes);
      }

    render() {
      
      return (
        <div className="col-sm-4 form-group">
            <Card className="text-left">
                <CardBody>
                    <FormGroup>
                        <Label for="exampleCheckbox"></Label>
                        {this.props.property.map(client => <SiteDetails selectedCheckboxes = {this.state.selectedCheckboxes} handleChange = {this.handleChange} name = {this.props.name} key={client.propertyID} {...client} />)}
                    </FormGroup>
                </CardBody>
            </Card>
      </div>
      );
  }
} 

export default ClientSiteDetails;