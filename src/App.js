import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Step } from 'semantic-ui-react'
import HeaderGroup from './components/HeaderGroup';
import Invitationforbid from './components/Invitationforbid';
import AddProperty from './components/AddProperty';
import { states } from './components/States.js';
import { StateStatus } from './components/StateStatus.js';

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
        return(<div><HeaderGroup headers={this.state.myArray}/><AddProperty 
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
