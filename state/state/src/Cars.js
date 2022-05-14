// import ReactDOM from 'react-dom';
// // eslint-disable-next-line no-undef
// class Cars extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year :1964
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}
//         </p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Cars/>, document.getElementById('root'));
import React, { Component } from 'react'

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
     brand:"Ford",
     model:"Mustang",
     color:"red",
     year:"1994"
    };
  }
  render() {
    return <div>
        <h1>My {this.state.brand}</h1>
        <p>
            It is a {this.state.color }
            {this.state.model} 
            from {this.state.year}
        </p>
    </div>;
  }
}