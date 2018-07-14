/*global google*/
import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';
import {Button, Grid} from 'semantic-ui-react';
import VendorType from './VendorType';
import { states } from './States';
import moment from 'moment';


class ReviewVendors extends Component {
  
  constructor(props){
        super(props);
        this.submitData = this.submitData.bind(this);
    }


    submitData(props){
            var bidData ={
            "bidid": "2",
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
        }
            
            console.log('bidData in confirm' + JSON.stringify(bidData))
            this.props.next(states.CONFIRM);
            fetch('http://localhost:3000/ifb/addbid/', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(bidData),
            });
            
        }
  render() {
   
   
      return (
        <form id="addpropertyform">
          <div className="container">
            <h3 className="well">Vendor Types</h3>
            <div className="col-lg-12 well">
                <div className="row">
                    {this.props.vendortypes.vendortypes.map(vendortype => <VendorType key={vendortype.vendortypeId} name = {vendortype.vendorType} vendors= {vendortype.vendor} />
                    )}
                    
                </div>
                    <button type="button"  className="col-sm-2 btn btn-lg btn-info"
                     onClick={this.submitData} >Submit & Proceed</button>
                </div>
          </div>
        </form>
      );
  }
} 

export default ReviewVendors;