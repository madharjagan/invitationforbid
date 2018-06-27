/*global google*/
import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';
import {Button, Grid} from 'semantic-ui-react';
import VendorType from './VendorType';


class ReviewVendors extends Component {


  render() {
      return (
        <form id="addpropertyform">
          <div className="container">
            <h3 className="well">Vendor Types</h3>
            <div className="col-lg-12 well">
                <div className="row">
                    {this.props.vendortypes.vendortypes.map(vendortype => <VendorType key={vendortype.typeid} name = {vendortype.Name} vendors= {vendortype.Vendors} />)}
                </div>
                <Grid>
                    <Grid.Column floated='left' width={5}>
                    <Button secondary onClick={this._back}>Back</Button>
                    </Grid.Column>
                </Grid>
            </div>
          </div>
        </form>
      );
  }
} 

export default ReviewVendors;