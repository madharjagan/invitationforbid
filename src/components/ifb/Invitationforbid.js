import React, { Component } from 'react';
import DatePicker from './OpwDatePicker';
import { Form, TextArea } from 'semantic-ui-react'
//import Dropzone from 'react-dropzone'
import DropzoneComponent from 'react-dropzone-component';
import './style.css';
import { states } from './States';
import { Dropdown } from 'semantic-ui-react'


var djsConfig = {autoProcessQueue: false ,addRemoveLinks: true}
var eventHandlers = { addedfile: (file) => console.log(file) ,thumbnail: null}

var componentConfig = { postUrl: 'no-url' ,processQueue:'false'};

/*
* Invitation for bid class
*/

var axios = require('axios');

var vendorTypes =[];
class Invitationforbid extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      clientNames : [],
      selectedVendor:[],
      selectedClient:'',
      bidDueDate:'',
      workDueDate:'',
      description:'',
      siteDetails:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeClient = this.handleChangeClient.bind(this);
    this.fetchBidDetails = this.fetchBidDetails.bind(this);
    this.fetchDate = this.fetchDate.bind(this);

    axios.get(`http://localhost:8082/getClientNames`)
        .then(resp => {   
          this.setState(prevState => ({
            clientNames: resp.data 
        }))
      }); 
      
       axios.get(`http://localhost:8082/getVendorTypes`)
        .then(resp => {   
          vendorTypes = resp.data;
         // console.log('vendorTypes' + vendorTypes)
          this.setState(prevState => ({
            vendorTypes: resp.data
        }))
      }); 
    
  }

  fetchBidDetails() {
    //console.log('fetchBidDetails in inviation '+this.state.selectedVendor + 'client' + this.state.selectedClient);
    
    axios.get(`http://localhost:8082/getClientSites?clientName=${this.state.selectedClient}`)
        .then(resp => {   
          this.state.siteDetails = JSON.stringify(resp.data);
          this.props.fetchBidDetails(this.state.selectedVendor,this.state.selectedClient,this.state.bidDueDate,this.state.workDueDate,this.state.description,this.state.siteDetails);
          this.props.next(states.REVIEW_CLIENTS);
      }); 
    
  }

  handleChange = (e, {value}) => {
  e.persist();
  this.setState({
      selectedVendor: [...this.state.selectedVendor, e.target.textContent] 
    });
  };

  
  handleChangeClient = (e) => {
        e.persist();
        this.setState({
            selectedClient: e.target.value
            });
    }; 

  fetchDate (date,id){   
   
     if( id === "bidDueDateId"){
        this.setState({ bidDueDate: date  }); 
     }
     if( id === "workDueDateId"){
        this.setState({ workDueDate: date  }); 
     } 
  }

  fetchDescription = (e) => {
  this.setState({
      description: e.target.value
    });
  };



 render()
  {
     var clientNames = this.state.clientNames.map((client) =>
                <option key={client}>{client}</option>
            );
    return (
        <div className="container">
        <h1 className="well">{this.screentitle}</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <Form id="inviationforbidform" onSubmit={this.fetchBidDetails}>
              <div className="row">		
                  <div className=" col-sm-6 form-group">
                    <label>Select Client</label>
                    <select onChange={(e) => this.handleChangeClient(e,this.props.clientNames)}>
                         <option class="option">Select</option>
                               {clientNames}
                        </select>
                   
                  </div>	
                <div className="row">
                    <div className="col-sm-6 form-group">
                      <label>Bid Due Date* </label>
                      <DatePicker id="bidDueDateId"  fetchDate={this.fetchDate} />
                    </div>	
                    <div className="col-sm-6 form-group">
                      <label>Work Due Date</label>
                      <DatePicker id="workDueDateId"  fetchDate={this.fetchDate}/>
                    </div>	
                </div>
                <div className="col-sm-11 form-group">
                  <label>Description*</label>
                  <TextArea autoHeight placeholder='Enter Description' value={this.props.description}
                  onChange={(e) => this.fetchDescription(e)}/>
                </div>
                <div className="col-lg-12 well">	
                  <div className="row">
                      <div className=" col-sm-8 form-group">
                        <label text-align="left">Select Vendors</label>
                            <Dropdown
                                placeholder="Select Vendors"
                                fluid multiple selection
                                options={vendorTypes}
                                onChange={(e) => this.handleChange(e,vendorTypes)}
                              />   
                      </div>  
                  </div>
                </div>
                <br/> <br/>	
                 <div className="col-sm-2 form-group">
                      <label>Attachments*</label>
                      <DropzoneComponent
                       config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig}/>
                  </div>									
              </div>
              <br/>
               <button type="submit"  className="col-sm-2 btn btn-lg btn-info">Proceed</button>
           </Form> 
          </div>
        </div>
      </div>
    );
  };

}

export default Invitationforbid;