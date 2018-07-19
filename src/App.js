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
    super(props)
    this.state ={
      bidId : '1',
      response: {
            "bidid": "1",
            "Client":{
                "Name": this.props.selectedClient,
                "Sites": ["205, Arbor Oaks Summerville", "200, Arbor Oaks Summerville"]
            },
            "BidDueDate": this.props.bidDueDate,
            "WorkDueDate": this.props.workDueDate,
            "Description": this.props.bidDescription,
            "Documents":[
                {
                    "Name": "ABC.doc",
                    "URL": "https://ABC.doc"
                },
                {
                    "Name": "XYZ.doc",
                    "URL": "https://XYZ.doc"
                }
            ],
            "Vendors":[
                {
                    "Name": "ABC Vendor Company",
                    "Type": "Alarms",
                    "Status": "Open",
                    "Price": "1000",
                    "Comments":[
                        {
                            "question": "Question1",
                            "reply": "Ans"
                        },
                        {
                            "question": "Question12",
                            "reply": "Ans"
                        }
                    ],

                    "BidPackage":[
                        {
                            "Name": "ABC.doc",
                            "URL": "https://ABC.doc"
                        },
                        {
                            "Name": "XYZ.doc",
                            "URL": "https://XYZ.doc"
                        }
                    ]
                },
                {
                    "Name": "XYZ Vendor Company",
                    "Type": "Alarms",
                    "Status": "Open/Closed/Waiting",
                    "Price": "1000",
                    "Comments":[
                        {
                            "question": "Question21",
                            "reply": "Ans"
                        },
                        {
                            "question": "Question22",
                            "reply": "Ans"
                        }
                    ],

                    "BidPackage":[
                        {
                            "Name": "ABC.doc",
                            "URL": "https://ABC.doc"
                        },
                        {
                            "Name": "XYZ.doc",
                            "URL": "https://XYZ.doc"
                        }
                    ]
                },
                {
                    "Name": "PQR Vendor Company",
                    "Type": "Alarms",
                    "Status": "Closed",
                    "Price": "555",
                    "Comments":[
                        {
                            "question": "Question31",
                            "reply": "Ans"
                        },
                        {
                            "question": "Question32",
                            "reply": "Ans"
                        }
                    ],

                    "BidPackage":[
                        {
                            "Name": "ABC.doc",
                            "URL": "https://ABC.doc"
                        },
                        {
                            "Name": "XYZ.doc",
                            "URL": "https://XYZ.doc"
                        }
                    ]
                }
            ]
        
      }
  };


/*
  // axios.get(`http://localhost:3000/ifb/${this.state.bidId}`)
   axios.get(`http://localhost:3000/ifb/1`)
        .then(resp => { 
          	this.setState({
					response: resp.data
          	});
      
      }); 

  */   

  }

  render() {
    
    return (
     <div className="App">
        <br />
        <br />
       <IFBStatus response={this.state.response}/> })}
        
      </div>      
    );
  }
}

export default App;