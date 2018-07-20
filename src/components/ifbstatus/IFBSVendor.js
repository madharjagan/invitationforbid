import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';

import  IFBSComment  from './IFBSComment';


class IFBSVendor extends Component {

constructor(props){
    super(props)
    this.state = {
       commentsModal: false
    };
    this.toggle = this.toggle.bind(this);
}

 toggle() {
    console.log('toggle called')
      this.setState({
        commentsModal: !this.state.commentsModal
      });
  }


render(){
        console.log('vendor in new page' + JSON.stringify(this.props.vendor.Comments))
return(
    <div>
        <tr>
                <td>{this.props.vendor.Name}</td>
                <td>{this.props.vendor.Status}</td>
                <td>
                <p>
                  <button type="button" className="btn btn-default btn-sm" >
                    <span className="glyphicon glyphicon-pencil"></span> 
                    {this.props.vendor.Price}
                  </button>
                </p>
                </td>
                <td>
                  <button type="button" className="btn btn-default btn-sm" 
                     onClick={this.toggle}>
                              Comments <span class="badge">  </span>  
                </button>        
                </td>
              </tr>
        <Modal isOpen={this.state.commentsModal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Comments </ModalHeader>
          <ModalBody>
            <Table datatable className="row-border hover">
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Reply</th>
                    </tr>
                    </thead>
                    <tbody>
                       {this.props.vendor.Comments.map(comment => <IFBSComment comment={comment} />)}
                    </tbody>
                </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Done</Button>{' '}
          </ModalFooter>
        </Modal>
        </div>
)

}

}

export default IFBSVendor;