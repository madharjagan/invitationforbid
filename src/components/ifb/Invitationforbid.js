import React, { Component } from 'react';
import DatePicker from './OpwDatePicker';
import { Form, TextArea, Dropdown } from 'semantic-ui-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import Dropzone from 'react-dropzone'
import DropzoneComponent from 'react-dropzone-component';
import './style.css';
import { states } from './States';
import uuidv1 from 'uuid/v1';
import ClientSitesModal from './ClientSitesModal';
import VendorNamesModal from './VendorNamesModal';




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
      selectedClientSite: new Set(),
      selectVendorNames: new Set(),
      BidDueDate:'',
      WorkDueDate:'',
      bidDescription:'',
      siteDetails:'',
      clientModal: false,
      vendorModal: false
    };
    this.state.bidData.Vendors = [];
    this.handleChangeClient = this.handleChangeClient.bind(this);
    this.handleChangeVendor = this.handleChangeVendor.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
    this.createBid = this.createBid.bind(this);
    this.toggleClientModal = this.toggleClientModal.bind(this);
    this.toggleVendorModal = this.toggleVendorModal.bind(this);
    this.updateBidDataClientDetails = this.updateBidDataClientDetails.bind(this);
    this.updateClientSite = this.updateClientSite.bind(this);
    this.updateBidDataVendorDetails = this.updateBidDataVendorDetails.bind(this);
    this.updateVendorName = this.updateVendorName.bind(this);

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

  toggleClientModal() {
    this.setState({
      clientModal: !this.state.clientModal
    });
  }

  toggleVendorModal() {
    this.setState({
      vendorModal: !this.state.vendorModal
    });
  }

  createBid(props){
    let bid = this.state.bidData;    //creating copy of object
    bid.bidid = uuidv1();
    delete bid["vendorObj"];
    this.setState({bidData:bid});

   // console.log('bidData ' + JSON.stringify(this.state.bidData))
    this.props.createBid(this.state.bidData);
    this.props.next(states.CONFIRM);
    
    fetch('http://localhost:3000/ifb/addbid/', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.bidData),
    });

}
  
  handleChangeVendor = (e) => {
    e.persist();
    let bid = this.state.bidData;
     bid.vendorObj = {};
     bid.vendorObj.vendortype = e.target.textContent;
     bid.vendorObj.vendorname = [] ;
     this.state.bidData.Vendors.push(bid.vendorObj);
     axios.get(`http://ec2-18-207-186-141.compute-1.amazonaws.com:8082/getVendorDetailsForType?vendorType=${e.target.textContent}`)
      .then(resp => {   
        this.state.vendorDetails = JSON.stringify(resp.data);
        this.state.vendorDetails = JSON.parse(this.state.vendorDetails);
        this.toggleVendorModal();
    }); 
    this.setState({
      bidData: bid
    });
    console.log(this.state.bidData);
  };

  
  handleChangeClient = (e) => {
      let bid = this.state.bidData;
      let selectedclient = e.target.value;
      bid.Client = {};
      bid.Client.name = selectedclient;
      bid.Client.sites = [];
      
      axios.get(`http://ec2-18-207-186-141.compute-1.amazonaws.com:8082/getClientSites?clientName=${selectedclient}`)
        .then(resp => { 
          this.state.siteDetails = JSON.stringify(resp.data);
          this.state.siteDetails = JSON.parse(this.state.siteDetails);
          this.toggleClientModal();
      }); 
      
      this.setState({
          selectedClient: selectedclient,
          bidData: bid
      });
      
  }; 

  
  updateBidDataClientDetails(){
    console.log("updateBidDataClientDetails Working");
    let bid = this.state.bidData;
    bid.Client.sites = [];
    this.state.selectedClientSite.forEach(v => bid.Client.sites.push(v)
     );
   
    this.setState({
      bidData: bid
    });
    console.log(this.state.bidData);
    this.toggleClientModal();
  }

  updateClientSite(scs){
   
    this.setState({selectedClientSite:scs});
  }

  updateBidDataVendorDetails(){
      let bid = this.state.bidData;     
      bid.vendorObj.vendorname = [] ;
      this.state.selectVendorNames.forEach(v => 
         bid.vendorObj.vendorname.push(v)
      );   
      this.setState({
           bidData: bid
      });
    this.toggleVendorModal();
    console.log('bid before state' + JSON.stringify(bid))
  }

  updateVendorName(vendorname){
    this.setState({selectVendorNames:vendorname});
  }

  fetchDate (date,id){   
     let bid = this.state.bidData;
     if( id === "bidDueDateId"){
        bid.BidDueDate = date;
        this.setState({ BidDueDate: date, bidData:bid }); 
     }
     if( id === "workDueDateId"){
      bid.WorkDueDate = date
      this.setState({ WorkDueDate: date, bidData:bid }); 
     } 

  }

  fetchDescription = (e) => {
    let bid = this.state.bidData;
    let desc = e.target.value;
    bid.Description = desc;
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
               <button type="submit"  className="col-sm-2 btn btn-lg btn-info">Create Bid</button>
           </Form> 
          </div>
        </div>
        <ClientSitesModal modal = {this.state.clientModal} toggle={this.toggleClientModal} className={this.props.className} siteDetails={this.state.siteDetails} updateBidDataClientDetails={this.updateBidDataClientDetails} updateClientSite = {this.updateClientSite}/>
        <VendorNamesModal modal = {this.state.vendorModal} toggle={this.toggleVendorModal} className={this.props.className} vendorDetails = {this.state.vendorDetails} updateBidDataVendorDetails ={this.updateBidDataVendorDetails} updateVendorName={this.updateVendorName}/>
      </div>
    );
  };

}


export default Invitationforbid;