import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react'

class HeaderStep extends Component {

    render(){
        return (
            <Step active={this.props.header.status}>
            <Icon name={this.props.header.Icon} />
            <Step.Content>
                <Step.Title>{this.props.header.Title}</Step.Title>
                <Step.Description>{this.props.header.Description}</Step.Description>
            </Step.Content>
            </Step>
        );
    }
}

export default HeaderStep;