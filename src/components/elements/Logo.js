import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    const {firstText, lastText ,info} = this.props;
    return (
      <div className="my-5">
      <div className="mb-2 text-center pageTitle sty-font">
        <span className="text-custom-3 mr-1">{firstText}</span>{lastText}
        <span className="text-custom-3 ml-1">.</span>
      </div>
      <div className="small text-custom-3 text-center">
          {info}
      </div>
      </div>
    );
  }
}
