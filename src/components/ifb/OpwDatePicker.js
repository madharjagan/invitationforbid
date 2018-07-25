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
      selectedDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
   
    //added for assigning new selected value to startDate variable to pass to invitationForBid screen
    
    this.state.selectedDate= date
    this.setState({
      selectedDate: date
    });
    
    this.props.fetchDate(this.state.selectedDate,this.props.id);    
  }

  render() {
    return (   
                <DatePicker
                dateFormat="YYYY/MM/DD"
                selected={this.state.selectedDate}
                onChange={this.handleChange}
                />
      );
  }
}