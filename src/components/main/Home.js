import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="container__header">
          <span className="title">Header</span>
        </div>
        <div className="container__box--1">
          {" "}
          <span className="title">Small box 1</span>{" "}
        </div>
        <div className="container__box--2">
          {" "}
          <span className="title">Small box 2</span>{" "}
        </div>
        <div className="container__box--3">
          {" "}
          <span className="title">Small box 3</span>{" "}
        </div>
        <div className="container__sidebar">
          <span className="title">Sidebar</span>
        </div>
        <div className="container__main">
          <span className="title">Main cont</span>
        </div>
        <div className="container__footer">
          <span className="title">Footer</span>
        </div>
      </div>
    );
  }
}
