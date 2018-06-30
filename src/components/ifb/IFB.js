import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import HeaderGroup from '../common/HeaderGroup';
import Invitationforbid from './Invitationforbid';
import { states } from './States.js';
import { StateStatus } from './StateStatus.js';
import ReviewVendors from './ReviewVendors';
import ReviewClients from './ReviewClients';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class IFB extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      currentState: states.INVIATATION_FOR_BID,
      status :'true',
      myArray : [
        { Title: 'Invitation for Bid', status:'active' , Description: 'Create Invitation for Bid', Icon:'' },
        { Title: 'Review Clients', status:'' , Description: 'Details for Client', Icon:'' },
        { Title: 'Review Vendors', status:'' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
        { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
       ],
       selectedVendor:[],
       vendorDetails:''
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this.getWorkFlowStatus = this.getWorkFlowStatus.bind(this);
    this.statestatus = new StateStatus();
    this.fetchVendorType = this.fetchVendorType.bind(this); 
    this.fetchVendorDetails = this.fetchVendorDetails.bind(this); 
   
  }

   _next(desiredState) {
    let currentState = this.state.currentState; 
    let nextState = this.statestatus.transitionTo(currentState, desiredState);
    this.state.currentState = nextState;
    this.setState({
      currentState: nextState,
      status: false
    });
     this.state.myArray = this.getWorkFlowStatus();
    }

  _back(desiredState) {
    let currentState = this.state.currentState;
    let nextState = this.statestatus.transitionFrom(currentState, desiredState);
    this.state.currentState = nextState;
    this.state.myArray = this.getWorkFlowStatus();
  }

  getWorkFlowStatus(){
    switch(this.state.currentState) {
      case states.INVIATATION_FOR_BID:
      return [
          { Title: 'Invitation for Bid', status:'active' , Description: 'Create Invitation for Bid', Icon:'' },
          { Title: 'Review Clients', status:'' , Description: 'Details for Client', Icon:'' },
          { Title: 'Review Vendors', status:'' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
          { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
        ];
        case states.REVIEW_CLIENTS:
      return [
          { Title: 'Invitation for Bid', status:'' , Description: 'Create Invitation for Bid', Icon:'' },
          { Title: 'Review Clients', status:'active' , Description: 'Details for Client', Icon:'' },
          { Title: 'Review Vendors', status:'' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
          { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
        ];
      case states.REVIEW_VENDORS:
      return [
          { Title: 'Invitation for Bid', status:'' , Description: 'Create Invitation for Bid', Icon:'' },
          { Title: 'Review Clients', status:'' , Description: 'Details for Client', Icon:'' },
          { Title: 'Review Vendors', status:'active' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
          { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
        ];
    }

  }

  _currentStep() {
    switch(this.state.currentState) {
      case states.INVIATATION_FOR_BID:
        return(<div><HeaderGroup headers={this.state.myArray}/><Invitationforbid next={this._next} fetchVendorType={this.fetchVendorType} /></div>);
      case states.REVIEW_CLIENTS:
        return(<div><HeaderGroup headers={this.state.myArray}/><ReviewClients next={this._next} back={this._back} fetchVendorDetails={this.fetchVendorDetails} selectedVendor={this.state.selectedVendor}/></div>);
      case states.REVIEW_VENDORS:
        return(<div><HeaderGroup headers={this.state.myArray}/><ReviewVendors vendortypes={JSON.parse(this.state.vendorDetails)}
          back={this._back}
          next={this._next}/></div>);
    }
  } 
   
   fetchVendorType (vendorType){    
    this.setState({ selectedVendor: [...this.state.selectedVendor, vendorType]  }); 
  }

   fetchVendorDetails (vendorDetailsFrmDb){    
    this.setState({ vendorDetails: vendorDetailsFrmDb  }); 
  }

  render() {
    return (
      <div>
        {this._currentStep()}
      </div>
    );
  }
}

export default IFB;
