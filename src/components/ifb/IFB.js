import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import HeaderGroup from '../common/HeaderGroup';
import Invitationforbid from './Invitationforbid';
import { states } from './States.js';
import { StateStatus } from './StateStatus.js';
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
        { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
       ],
       bidData: {}
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this.getWorkFlowStatus = this.getWorkFlowStatus.bind(this);
    this.statestatus = new StateStatus();
    this.createBid = this.createBid.bind(this); 
   
   
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
          { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
        ];
      case states.CONFIRM:
      return [
          { Title: 'Invitation for Bid', status:'' , Description: 'Create Invitation for Bid', Icon:'' },
          { Title: 'Confirmation', status:'active' , Description: '', Icon:'info' }
        ];
    }

  }

  _currentStep() {
    switch(this.state.currentState) {
      case states.INVIATATION_FOR_BID:
        return(<div><HeaderGroup headers={this.state.myArray}/><Invitationforbid next={this._next} createBid={this.createBid} /></div>);
      case states.CONFIRM:
        return(<div><HeaderGroup headers={this.state.myArray}/>
          <Confirm bidData={this.state.bidData}
          back={this._back}/></div>);
    }
  } 
   
   createBid (bidData){   
     
    this.setState({ bidData: bidData })
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
