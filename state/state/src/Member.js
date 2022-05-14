import React, { Component } from 'react'

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Tâm xinnn PNV23A",
        age: "20",
      };
  }
  render() {
    return (
      <div>
        <h1>Tên của bạn là: {this.state.name}</h1>
        <h1>Tuổi: {this.state.age}</h1>
      </div>
    );
  }
}