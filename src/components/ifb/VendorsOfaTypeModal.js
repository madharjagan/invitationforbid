import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewVendors from './ReviewVendors';

export default class VendorsOfaTypeModal extends Component {

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
                    <ReviewVendors vendortypes={this.props.vendorDetails}/>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Done</Button>{' '}
            </ModalFooter>
            </Modal>        
        </div>
    )
    }
}
