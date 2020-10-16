import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="rounded-top bg-danger py-2">
        <div className="pt-2 text-center h4 sty-font text-light">
          imagenary.
        </div>
        <div className="text-light text-center small">
          The internet’s source of freely-usable images.
        </div>
      </div>
    );
  }
}
