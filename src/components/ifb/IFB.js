import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import HeaderGroup from '../common/HeaderGroup';
import Invitationforbid from './Invitationforbid';
import { states } from './States.js';
import { StateStatus } from './StateStatus.js';
import ReviewVendors from './ReviewVendors';
import ReviewClients from './ReviewClients';
import Confirm from './Confirm';

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
       vendorDetails:'',
       selectedClient:'',
       bidDueDate:'',
       workDueDate:'',
       bidDescription:'',
       siteDetails:''
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this.getWorkFlowStatus = this.getWorkFlowStatus.bind(this);
    this.statestatus = new StateStatus();
    this.fetchBidDetails = this.fetchBidDetails.bind(this); 
    this.fetchVendorDetails = this.fetchVendorDetails.bind(this); 
   
  }

   _next(desiredState) {
    let currentState = this.state.currentState; 
    let nextState = this.statestatus.transitionTo(currentState, desiredState);
    this.state.currentState = nextState;
    this.state.myArray = this.getWorkFlowStatus();
    this.setState({
      currentState: nextState
    });
     
   //  this.state.siteDetails='{ 	"siteDetails": [{ 		"clientName": "Rekha", 		"sites": [{ 			"propertyId" : 1, 			"name" : "street1", 			"circle" : "c1", 			"streetNumber": "1" 		}, { 			"propertyId" : 2, 			"name" : "street2", 			"circle" : "c2", 			"streetNumber": "Street2" 		}] 	}, { 		"clientName": "Latha", 		"sites": [{ 			"propertyId" : 1, 			"name" : "street2", 			"circle" : "c2", 			"streetNumber": "3" 		}] 	}] }';
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
      case states.CONFIRM:
      return [
          { Title: 'Invitation for Bid', status:'' , Description: 'Create Invitation for Bid', Icon:'' },
          { Title: 'Review Clients', status:'' , Description: 'Details for Client', Icon:'' },
          { Title: 'Review Vendors', status:'' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
          { Title: 'Confirmation', status:'active' , Description: '', Icon:'info' }
        ];
    }

  }

  _currentStep() {
    switch(this.state.currentState) {
      case states.INVIATATION_FOR_BID:
        return(<div><HeaderGroup headers={this.state.myArray}/><Invitationforbid next={this._next} fetchBidDetails={this.fetchBidDetails} /></div>);
      case states.REVIEW_CLIENTS:
        return(<div><HeaderGroup headers={this.state.myArray}/><ReviewClients next={this._next} back={this._back} fetchVendorDetails={this.fetchVendorDetails} 
        selectedVendor={this.state.selectedVendor} selectedClient={this.state.selectedClient}
        siteDetails={JSON.parse(this.state.siteDetails)}/></div>);
      case states.REVIEW_VENDORS:
        return(<div><HeaderGroup headers={this.state.myArray}/><ReviewVendors vendortypes={JSON.parse(this.state.vendorDetails)}
          selectedClient={this.state.selectedClient} 
          bidDueDate={this.state.bidDueDate} workDueDate={this.state.workDueDate} bidDescription={this.state.bidDescription}
          back={this._back}
          next={this._next}/></div>);
      case states.CONFIRM:
        return(<div><HeaderGroup headers={this.state.myArray}/><Confirm selectedClient={this.state.selectedClient}
          back={this._back}/></div>);
    }
  } 
   
   fetchBidDetails (vendorType,client,bidDueDate,workDueDate,description,clientSite){   
     console.log('fetchBidDetails in IFB vendorType'+ vendorType+ 'client'+ client ) 
     console.log(' client site in IFB ' + clientSite);
    this.setState({ selectedVendor: [...this.state.selectedVendor, vendorType]  }); 
    this.setState({ selectedClient: client  }); 
    this.setState({ bidDueDate: bidDueDate  }); 
    this.setState({ workDueDate: workDueDate });
    this.setState({ bidDescription: description});
    this.setState({ siteDetails: clientSite })
  }

   fetchVendorDetails (vendorDetailsFrmDb){    
    this.setState({ vendorDetails: vendorDetailsFrmDb  }); 
  }

  fetchClientSiteDetails(clientDetailsFromDb){
      this.setState({ siteDetails: clientDetailsFromDb });
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
