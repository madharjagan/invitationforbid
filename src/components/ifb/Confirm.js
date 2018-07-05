import React , { Component } from 'react';


var bidData ={
            "bidid": "2",
            "Client":{
                "Name": "The Client Company Inc.",
                "Sites": ["205, Arbor Oaks Summerville", "200, Arbor Oaks Summerville"]
            },
            "BidDueDate": "07/03/2018",
            "WorkDueDate": "10/03/2018",
            "Description": "Installs pipes and fixtures, such as sinks and toilets, for water, gas, steam, air, or other liquids Installs supports for pipes, equipment, and fixtures prior to installation Assembles fittings and valves for installation Modifies length of pipes, fixtures, and other plumbing materials as needed for a building Uses saws and pipe cutters as necessary Installs heating and air-conditioning systems, including water heaters Collaborates with contractors, construction workers, electricians, pipefitters, and steamfitters in installing and repairing plumbing Tests plumbing systems for leaks and other problems Analyses problem and identifies appropriate tools and materials for repair Chooses plumbing materials based on budget, location, and intended uses of building Follows health and safety standards and complies with building codes Writes report documenting the problem and summary of actions taken Performs inspections of plumbing systems to identify and replace worn parts Prepares bids and schedules and oversees other workers, such as apprentices and helpers",
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
                    "Name": "Vendor 1",
                    "Type": "Alarms",
                    "Status": "Open/Closed/Waiting",
                    "Price": "1000",
                    "Comments":[
                        {
                            "question": "Value?",
                            "reply": "Ans"
                        },
                        {
                            "question": "Value?",
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
                    "Name": "Vendor 1",
                    "Type": "Alarms",
                    "Status": "Open/Closed/Waiting",
                    "Price": "1000",
                    "Comments":[
                        {
                            "question": "Value?",
                            "reply": "Ans"
                        },
                        {
                            "question": "Value?",
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
        };

var axios = require('axios');
class Confirm extends Component{

    submitData(){
        console.log('action called');
        console.log('bidData in confirm' + JSON.stringify(bidData))
        fetch('http://localhost:3000/ifb/addbid/', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(bidData),
        });
    }
    render(){
            
        return(
            <form id="addpropertyform">
          <div className="container">
            <h3 className="well">COnfirm Page</h3>
            <div className="col-lg-12 well">
                <div className="row">
                    
                </div>
                    <button type="button"  className="col-sm-2 btn btn-lg btn-info"
                      onClick={this.submitData}>Submit</button>
                </div>
          </div>
        </form>
        );
    }

}

export default Confirm;