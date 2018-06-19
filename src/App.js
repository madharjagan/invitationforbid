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
    console.log('constructor of app called');
    super(props);
    this.state = {
      currentState: states.INVIATATION_FOR_BID,
      status :'true'
    };
    console.log('app values - currentState -- '+this.state.currentState);
    console.log('app values - status -- '+this.state.status);
    this._next = this._next.bind(this);
    this._back = this._back.bind(this);
    this.statestatus = new StateStatus();
  }

   _next(desiredState) {
     console.log('next method of app');
    let currentState = this.state.currentState;
    console.log('currentState' +currentState);
    console.log('desiredState' +desiredState);
   
    let nextState = this.statestatus.transitionTo(currentState, desiredState);
    this.setState({
      currentState: nextState
    });
    this.setState({
      status: false
    });
    console.log('currentState' +this.state.currentState);
     console.log('status' +this.state.status);
  }

  _back(desiredState) {
    let currentState = this.state.currentState;
    this.setState({
      currentState: this.statestatus.transitionFrom(currentState, desiredState)
    });
  }
  _currentStep() {
    switch(this.state.currentState) {
      case states.INVIATATION_FOR_BID:
        return(<Invitationforbid next={this._next}/>);
      case states.REVIEW_VENDORS:
        return(<AddProperty 
          back={this._back}
          next={this._next}/>);
      default:
        return(<Invitationforbid next={this._next}/>);
    }
  } 
  render() {
    var myArray = [
      { Title: 'Invitation for Bid', status:this.state.status , Description: 'Create Invitation for Bid', Icon:'' },
      { Title: 'Review Vendors', status:this.state.status , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
      { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
  ];
    return (
      <div className="App">
        <HeaderGroup headers={myArray}/>
        {this._currentStep()}
      </div>
    );
  }
}

export default App;
