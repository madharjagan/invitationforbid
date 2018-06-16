import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Step } from 'semantic-ui-react'
import HeaderGroup from './components/HeaderGroup';
import Invitationforbid from './components/Invitationforbid';


class App extends Component {  
  render() {
    var myArray = [
      { Title: 'Invitation for Bid', status:'true' , Description: 'Create Invitation for Bid', Icon:'' },
      { Title: 'Review Vendors', status:'' , Description: 'Send Invitation for Bid for Vendors', Icon:'' },
      { Title: 'Confirmation', status:'' , Description: '', Icon:'info' }
  ];
    return (
      <div className="App">
        <HeaderGroup headers={myArray}/>
        <Invitationforbid />
      </div>
    );
  }
}

export default App;
