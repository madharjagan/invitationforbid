import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Step } from 'semantic-ui-react'
import HeaderGroup from './components/ifb/HeaderGroup';
import Invitationforbid from './components/ifb/Invitationforbid';
import { states } from './components/ifb/States.js';
import { StateStatus } from './components/ifb/StateStatus.js';
import ReviewVendors from './components/ifb/ReviewVendors';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      currentState: states.INVIATATION_FOR_BID,
      status :'true',
      myArray : [
        { Title: 'Invitation for Bid', status:'active' , Description: 'Create Invitation for Bid', Icon:'' },
        { Title: 'Review Vendors', status:'' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
        { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
       ]
    };
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this.getWorkFlowStatus = this.getWorkFlowStatus.bind(this);
    this.statestatus = new StateStatus();
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
     this.state.verndortypes = '{\r\n\t\"vendortypes\": [{\r\n\t\t\t\"typeid\": 1,\r\n\t\t\t\"Name\": \"ABC Type\",\r\n\t\t\t\"Vendors\": [{\r\n\t\t\t\t\t\"vendorID\":1,\r\n\t\t\t\t\t\"Name\": \"ABC Company\",\r\n\t\t\t\t\t\"email\": \"abc@gmail.com\"\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"vendorID\":2,\r\n\t\t\t\t\t\"Name\": \"def Company\",\r\n\t\t\t\t\t\"email\": \"def@gmail.com\"\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"vendorID\":3,\r\n\t\t\t\t\t\"Name\": \"qwe Company\",\r\n\t\t\t\t\t\"email\": \"qwe@gmail.com\"\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"typeid\": 2,\r\n\t\t\t\"Name\": \"123 Type\",\r\n\t\t\t\"Vendors\": [{\r\n\t\t\t\t\t\"vendorID\":4,\r\n\t\t\t\t\t\"Name\": \"123 Company\",\r\n\t\t\t\t\t\"email\": \"123@gmail.com\"\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"vendorID\":5,\r\n\t\t\t\t\t\"Name\": \"456 Company\",\r\n\t\t\t\t\t\"email\": \"456@gmail.com\"\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"vendorID\":6,\r\n\t\t\t\t\t\"Name\": \"789 Company\",\r\n\t\t\t\t\t\"email\": \"789@gmail.com\"\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}\r\n\t]\r\n}'
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
          { Title: 'Review Vendors', status:'' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
          { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
        ];
      case states.REVIEW_VENDORS:
      return [
          { Title: 'Invitation for Bid', status:'' , Description: 'Create Invitation for Bid', Icon:'' },
          { Title: 'Review Vendors', status:'active' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
          { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
        ];
    }

  }

  _currentStep() {
    switch(this.state.currentState) {
      case states.INVIATATION_FOR_BID:
        return(<div><HeaderGroup headers={this.state.myArray}/><Invitationforbid next={this._next}/></div>);
      case states.REVIEW_VENDORS:
        return(<div><HeaderGroup headers={this.state.myArray}/><ReviewVendors vendortypes={JSON.parse(this.state.verndortypes)}
          back={this._back}
          next={this._next}/></div>);
    }
  } 
  render() {
    return (
      <div className="App">
        {this._currentStep()}
      </div>
    );
  }
}

export default App;
