import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 mx-3 p-3 radius-top bg-dark">
          <div className="h4 sty-font text-light">
            <span className="text-danger">image</span>nary
            <span className="text-danger">.</span>
          </div>
          <div className="text-light">
            <span className="mr-2 badge badge-danger">The internet’s source of freely-usable images.</span>
            <span className="mr-2 badge badge-danger">Powered by : Unsplash.</span>
            <span className="mr-2 badge badge-danger">Designed by : Karan Das.</span>
          </div>
        </div>
      </div>
    );
  }
}
