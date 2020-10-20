import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="mt-5 p-3 bg-light">
          <div className="h4 sty-font">
            <span className="text-danger">image</span>nary
            <span className="text-danger">.</span>
          </div>
          <div className="small text-muted">
            <span className="">Powered by : Unsplash.</span>
          </div>
        </div>
      </div>
    );
  }
}
