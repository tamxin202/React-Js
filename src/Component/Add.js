import React, { Component } from 'react';
import Item from './Item';
import './App.css';
class Add extends Component {
    constructor(props) {
        super(props);
        this.onClickMe = this.onClickMe.bind(this, 'Ahihi')
    }

    onClick(text) {
        alert(text);
    }
    render() {
        return (
            <div>
                 <button type="button" className="btn btn-default" onClick={ this.onClickMe }>
                    Click Me !
                 </button>
            </div>
        );
    }
}

export default Add;
//App.js
