import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="mt-5 p-3 bg-custom-1 shadow-sm">
          <div className="h4 sty-font">
          <img
              src={require("../../assets/logo.png")}
              height="30"
              width="30"
              className="mr-1 mb-1"
              alt="logo"
            />
            <span className="text-custom-3">image</span>nary
            <span className="text-custom-3">.</span>
          </div>
          <div className="small">
            <span className="">Powered by : React & Unsplash.</span>
          </div>
        </div>
      </div>
    );
  }
}
