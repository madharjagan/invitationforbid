import React, { Component } from 'react';
import { IFBRStates } from './IFBRStates';

class IFBInfo extends Component {


  render() {
      return (
        <div className="container">
            <h1 className="well"></h1>
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
                        <label>Work Due Date</label>3
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
                <br/>
                <button type="button"  className="col-sm-2 btn btn-lg btn-info"
                onClick={(nextAction) => this.props.next(IFBRStates.SUBMIT_BID)} >Proceed</button>
            </div>
        </div>
      );
  }
} 

export default IFBInfo;