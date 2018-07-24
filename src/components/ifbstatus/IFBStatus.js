import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import IFBSVendor from './IFBSVendor'

var axios = require('axios');
class IFBStatus extends Component {

  constructor(props){
    super(props);
    this.state = {
       commentsModal: false
    };
  }

  render() {
      console.log("Render**********" + this.props.response.Vendors);
      return (
        <div className="container">
        <form>
            <h1>IFB Status Page</h1>
          <Table datatable className="row-border hover">
            <thead>
              <tr>
                <th>Verdor Name</th>
                <th>Status</th>
                <th>Price</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
                {this.props.response.Vendors.map(vendor => <IFBSVendor vendor={vendor} />)}
            </tbody>
          </Table>
        </form>
      </div>
  )
  }
} 

export default IFBStatus;