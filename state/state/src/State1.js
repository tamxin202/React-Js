import React, { Component } from 'react';
import products_data from "./data";
class State1 extends Component {
    constructor(props) {
        var arr= products_data();
        super(props);
        this.state = {arr};}
    render() {
        return (
            <div>{
                this.state.arr.map(key =>
                    <div> <h2> {key.name}</h2>
                    <br />
                     <img src={key.image} with={200} height={200}/>
                     <br />
                    <h4> {key.detail}</h4>
                    <div>
                 <button type="button" className="btn btn-default" onClick={ this.onClickMe }>
                    Add to cart
                 </button>
            </div>
                    </div>
                    )
            
           
                  }  </div>
        );
    }
}

export default State1;