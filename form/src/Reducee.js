import React from "react";
// import "./style.css";

export default class Reducee  extends React.Component {
  students = [
    {
      id: "11",
      marks: 31
    },
    {
      id: "12",
      marks: 80
    },
    {
      id: "3",
      marks: 98
    }
  ];
  render() {
    let total = this.students.reduce(function(prev, current) {
      return prev + +current.marks;
    }, 0);

    return <h1>Total Marks, {total}</h1>;
  }
}