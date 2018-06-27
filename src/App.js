import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { Component } from 'react';
import IFB from './components/ifb/IFB';
import IFBStatus from './components/ifbstatus/IFBStatus';
import IFBResponse from './components/ifbresponse/IFBResponse';


class App extends Component { 
  render() {
    return (
      <div className="App">
        <IFB />
        <br />
        <br />
        <IFBStatus />
        <br />
        <br />
        <h1>IFB Response WorkFlow</h1>
        <IFBResponse />
      </div>
    );
  }
}

export default App;