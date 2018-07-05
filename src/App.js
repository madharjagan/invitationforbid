import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { Component } from 'react';
import IFB from './components/ifb/IFB';
import IFBStatus from './components/ifbstatus/IFBStatus';
import IFBResponse from './components/ifbresponse/IFBResponse';


class App extends Component { 
  state = {
    response: ''
  };


   componentDidMount() {
   // console.log('componentDidMount called ')
    this.callApi()
      .then(res => 
        this.setState({ response: res 
        }))
      //  , console.log('set state' + res),
      //  console.log('set state' + this.state.response)))
      .catch(err => console.log(err));
  }

  callApi = async () => {
  //  console.log('callApi called ')
    const response = await fetch('/ifb');
    const body = await response.json();
   // console.log(' message from express - body.message '+ body.message);
   // console.log(' message from express - body '+ body);
    if (response.status !== 200) throw Error(body.message);
    return body.message;
  };


  render() {
    return (
      <div className="App">
         <br />
        <br />
        <p className="App-intro">{this.state.response}</p>
        <br />
        <br />
        <IFB /> 
        <br />
        <br />
        
      </div>
    );
  }
}

export default App;