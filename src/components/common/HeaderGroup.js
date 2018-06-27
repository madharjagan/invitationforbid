import React, { Component } from 'react';
import { Step } from 'semantic-ui-react'
import HeaderStep from './HeaderStep';

class HeaderGroup extends Component {

    render(){
        return (
        <Step.Group>
            {this.props.headers.map(head => <HeaderStep key={head.Title} header={head} />)}
        </Step.Group>
        );
    }
}

export default HeaderGroup;