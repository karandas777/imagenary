import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    const {firstText, lastText ,info} = this.props;
    return (
      <div className="my-5">
      <div className="mb-2 text-center h1 sty-font text-light">
        <span className="text-danger">{firstText}</span>{lastText}
        <span className="text-danger">.</span>
      </div>
      <div className="small text-light text-center">
          {info}
      </div>
      </div>
    );
  }
}
