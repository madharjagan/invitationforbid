import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Form } from 'semantic-ui-react'
/* global moment */

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class OpwDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
   
    //added for assigning new selected value to startDate variable to pass to invitationForBid screen
    this.state.startDate= date
    this.setState({
      startDate: date
    },
    this.props.fetchDate(this.state.startDate,this.props.id));
    
  }

  render() {
    return (   
              <Form id="inviationforbidform" onSubmit={this.fetchDate}>
                <DatePicker
                dateFormat="YYYY/MM/DD"
                selected={this.state.startDate}
                onChange={this.handleChange}
                />
          </Form>
      );
  }
}