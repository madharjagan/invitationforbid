/*global google*/
import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';
import {Button, Grid} from 'semantic-ui-react';
import VendorType from './VendorType';
import { states } from './States';

class ReviewVendors extends Component {

  render() {
      return (
        <form id="addpropertyform">
          <div className="container">
            <h3 className="well">Vendor Types</h3>
            <div className="col-lg-12 well">
                <div className="row">
                    {this.props.vendortypes.vendortypes.map(vendortype => <VendorType key={vendortype.vendortypeId} name = {vendortype.vendorType} vendors= {vendortype.vendor} />)}
                </div>
                    <button type="button"  className="col-sm-2 btn btn-lg btn-info"
                     onClick={(nextAction) => this.props.next(states.CONFIRM)} >Proceed</button>
                </div>
          </div>
        </form>
      );
  }
} 

export default ReviewVendors;