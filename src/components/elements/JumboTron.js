import React, { Component } from "react";

export default class JumboTron extends Component {
  render() {
    const styleX = {
      backgroundImage: `url(${this.props.bgImg})`,
      backgroundSize: "cover",
    };
    return (
      <div className="min-height p-0" style={styleX}>
        <div className="min-height bg-trans py-5">
          <div className="mt-5 mb-4 text-center h1 sty-font text-light">
            <span className="text-danger">image</span>nary
            <span className="text-danger">.</span>
          </div>

          <div className="py-3">
            <input
              type="text"
              className="form-control w-50 mx-auto rounded-pill border-0"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}
