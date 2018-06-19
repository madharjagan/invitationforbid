import React, { Component } from 'react';
import { Step } from 'semantic-ui-react'
import HeaderStep from './HeaderStep';

class HeaderGroup extends Component {

    render(){
        return (
        <Step.Group>
            <HeaderStep header={this.props.headers[0]}/>
            <HeaderStep header={this.props.headers[1]}/>
            <HeaderStep header={this.props.headers[2]}/>
        </Step.Group>
        );
    }
}

export default HeaderGroup;