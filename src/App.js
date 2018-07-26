import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { Component } from 'react';
import IFB from './components/ifb/IFB';
import IFBStatus from './components/ifbstatus/IFBStatus';
import IFBResponse from './components/ifbresponse/IFBResponse';

var axios = require('axios');
class App extends Component { 

  constructor(props){
    super(props);
    this.state ={
      bidId : '1',
     response: {},

    };

    this.state.response.Vendors = [];

  }
  
  componentDidMount() {
    axios.get(`http://18.207.186.141:3000/ifb/1`)
    .then(resp => {           
          this.setState({response: JSON.parse(resp.data)});
    }); 
  }


  render() {
    return (
     <div className="App">
        <br />
        <br />
      <IFBStatus response={this.state.response}/>
      <IFB/>        
      </div>      
    );
  }
}

export default App;