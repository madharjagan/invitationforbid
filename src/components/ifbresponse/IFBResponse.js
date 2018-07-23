import React, { Component } from 'react'
import { Form, TextArea, Dropdown } from 'semantic-ui-react'
import DatePicker from '../ifb/OpwDatePicker';
import DropzoneComponent from 'react-dropzone-component';


var djsConfig = {autoProcessQueue: false ,addRemoveLinks: true}
var eventHandlers = { addedfile: (file) => console.log(file) ,thumbnail: null}

var componentConfig = { postUrl: 'no-url' ,processQueue:'false'};

export default class IFBResponse extends Component {
    constructor(props){
        super(props);
        this.state = {
            bidData: {},
            bidResponseDescription:''
        }
    }


  render() {
    return (
        <div className="container">
            <div class="divider">
                <h1 className="well">BID Package</h1>
                <br />
                <br />
            </div>
            <div className="col-lg-12 well">
            <div className="row">
                    <div className=" col-sm-6 form-group">
                    <label>Client</label> 
                    <p> ABC private ltd </p>                  
                    </div>	
                    <div className="col-sm-3 form-group">
                        <label>Bid Due Date</label>
                        <p>12/12/2018 </p>
                    </div>
                    <div className="col-sm-3 form-group">
                        <label>Work Due Date</label>
                        <p>12/15/2018</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 form-group">
                    <label>Description</label>
                    <p>Installs pipes and fixtures, such as sinks and toilets, for water, gas, steam, air, or other liquids
Installs supports for pipes, equipment, and fixtures prior to installation
Assembles fittings and valves for installation
Modifies length of pipes, fixtures, and other plumbing materials as needed for a building
Uses saws and pipe cutters as necessary
Installs heating and air-conditioning systems, including water heaters
Collaborates with contractors, construction workers, electricians, pipefitters, and steamfitters in installing and repairing plumbing
Tests plumbing systems for leaks and other problems
Analyses problem and identifies appropriate tools and materials for repair
Chooses plumbing materials based on budget, location, and intended uses of building
Follows health and safety standards and complies with building codes
Writes report documenting the problem and summary of actions taken
Performs inspections of plumbing systems to identify and replace worn parts
Prepares bids and schedules and oversees other workers, such as apprentices and helpers</p>
                    </div>
                </div>
            </div>
            <div class="divider">
            <hr />
            <br />
            </ div>
            <div className="col-lg-12 well">
                <div className="form-group">
                    <label>Response*</label>
                    <TextArea  class="form-control" placeholder='Your Response' value={this.state.bidResponseDescription}/>
                </div>
            </div>
            <div className="col-lg-12 well">
                <div className="row">
                <div className="col-lg-3 well">
                    <label>Price* </label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="1000" />
                </div>
                <div className="col-lg-3 well">
                    <label>Work Due Date</label>
                    <DatePicker id="workDueDateId"  fetchDate={this.fetchDate}/>
                </div>
                <div className="col-lg-3 well">
                    <label>Attachments*</label>
                    <DropzoneComponent
                       config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig}/>
                </div>
                </div>
            </div>
        </div>
    )
  }
}
