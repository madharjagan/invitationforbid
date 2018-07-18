import React, { Component } from 'react';
import DatePicker from './OpwDatePicker';
import { Form, TextArea, Dropdown } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import Dropzone from 'react-dropzone'
import DropzoneComponent from 'react-dropzone-component';
import './style.css';
import { states } from './States';
import uuidv1 from 'uuid/v1';

import ReviewClients from './ReviewClients';


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
      bidData: {},
      clientNames : [],
      selectedVendor:[],
      selectedClient:'',
      bidDueDate:'',
      workDueDate:'',
      bidDescription:'',
      siteDetails:'',
      modal: false
    };
    this.state.bidData.vendors=[];
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeClient = this.handleChangeClient.bind(this);
    this.handleChangeVendor = this.handleChangeVendor.bind(this);
    this.fetchBidDetails = this.fetchBidDetails.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
    this.createBid = this.createBid.bind(this);
    this.toggle = this.toggle.bind(this);

    axios.get(`http://ec2-18-207-186-141.compute-1.amazonaws.com:8082/getClientNames`)
        .then(resp => {   
          this.setState(prevState => ({
            clientNames: resp.data 
        }))
      }); 
      
       axios.get(`http://ec2-18-207-186-141.compute-1.amazonaws.com:8082/getVendorTypes`)
        .then(resp => {   
          vendorTypes = resp.data;
         // console.log('vendorTypes' + vendorTypes)
          this.setState(prevState => ({
            vendorTypes: resp.data
        }))
      }); 
    
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  createBid(props){
    let bid = this.state.bidData;    //creating copy of object
    bid.bidid = uuidv1();
    //bidData.client.sites.push( this.state.selectedClientSites);
    this.setState({bidData:bid});
    
    console.log('bidData in confirm' + JSON.stringify(this.state.bidData))
   //this.props.next(states.CONFIRM);
    fetch('http://localhost:3000/ifb/addbid/', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.bidData),
    });

}
  fetchBidDetails() {
    //console.log('fetchBidDetails in inviation '+this.state.selectedVendor + 'client' + this.state.selectedClient);
    
    axios.get(`http://ec2-18-207-186-141.compute-1.amazonaws.com:8082/getClientSites?clientName=${this.state.selectedClient}`)
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

  handleChangeVendor = (e) => {
    e.persist();
    let bid = this.state.bidData;
    let selectedVendor ={};
    selectedVendor.type = e.target.textContent;
    bid.vendors.push(selectedVendor);
    this.setState({
      bidData: bid
    });

  };

  
  handleChangeClient = (e) => {
      let bid = this.state.bidData;
      let selectedcleint = e.target.value;
      bid.client = {};
      bid.client.name = selectedcleint;
      bid.client.sites = [];
      
      axios.get(`http://localhost:8082/getClientSites?clientName=${selectedcleint}`)
        .then(resp => { 
          this.state.siteDetails = JSON.stringify(resp.data);
          this.state.siteDetails = JSON.parse(this.state.siteDetails);
          this.toggle();
      }); 
      
      this.setState({
          selectedClient: selectedcleint,
          bidData: bid
      });
      
  }; 

  fetchDate (date,id){   
     let bid = this.state.bidData;
     if( id === "bidDueDateId"){
        bid.bidduedate = date;
        this.setState({ bidDueDate: date, bidData:bid }); 
     }
     if( id === "workDueDateId"){
      bid.workduedate = date
      this.setState({ workDueDate: date, bidData:bid }); 
     } 

  }

  fetchDescription = (e) => {
    let bid = this.state.bidData;
    let desc = e.target.value;
    bid.description = desc;
    this.setState({
      bidDescription: desc,
      bidData:bid
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
            <Form id="inviationforbidform" onSubmit={this.createBid}>
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
                  <TextArea autoHeight placeholder='Enter Description' value={this.state.bidDescription}
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
                                onChange={(e) => this.handleChangeVendor(e)}
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

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Client Site Selection</ModalHeader>
          <ModalBody>
                   <ReviewClients siteDetails={this.state.siteDetails}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            
          </ModalFooter>
        </Modal>

      </div>
    );
  };

}

export default Invitationforbid;