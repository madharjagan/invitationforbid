import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewClients from './ReviewClients';

export default class ClientSitesModal extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

  toggle() {
    this.props.toggle();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Client Site Selection</ModalHeader>
          <ModalBody>
                   <ReviewClients siteDetails={this.props.siteDetails} updateClientSite={this.props.updateClientSite}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.updateBidDataClientDetails}>Done</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
