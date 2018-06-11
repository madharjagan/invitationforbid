import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import DropdownExampleSelection from './Selection';
import DatePicker from './OpwDatePicker';
import { Form, TextArea } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

export default class Invitationforbid extends Component {
  render() {
    return (
        <div className="container">
        <h1 className="well">{this.screentitle}</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <Form id="addpropertyform">
              <div className="col-sm-12">		
                <div className="form-group">
                  <label>Select Client</label>
                  <DropdownExampleSelection />
                </div>	
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <label>Bid Due Date* </label>
                    <DatePicker />
                  </div>	
                  <div className="col-sm-6 form-group">
                    <label>Work Due Date</label>
                    <DatePicker />
                  </div>	
                </div>
                <div className="form-group">
                  <label>Description*</label>
                  <TextArea />
                </div>	
                <div className="form-group">
                  <label>Attachments*</label>
                  <Dropzone />
                </div>		
                <button type="button"  className="btn btn-lg btn-info">Create Bid</button>									
              </div>
            </Form> 
          </div>
        </div>
      </div>
    );
  }
}
