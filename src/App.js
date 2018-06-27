import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { Component } from 'react';
import IFBStatus from './components/ifbstatus/IFBStatus';
import IFB from './components/ifb/IFB';


class App extends Component { 
  render() {
    return (
      <div className="App">
        <IFB />
        <br />
        <br />
        <IFBStatus />
      </div>
    );
  }
}

export default App;
