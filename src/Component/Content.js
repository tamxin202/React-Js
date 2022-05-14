import React, { Component } from 'react';
import RightContent from './RightContent';
class Content extends Component {
    render() {
        return (
            <div id='content'>
                <RightContent/>
                <div style={{clear:'both'}} />
                           
            </div>
        );
    }
}

export default Content;
