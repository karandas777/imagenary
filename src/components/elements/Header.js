import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="row m-0 bg-custom-1 custom-p shadow-sm">
        <div className="col-md-5 px-0">
          <span className="navbar-brand sty-font text-custom-3">
            <img
              src={require("../../assets/logo.png")}
              height="30"
              width="30"
              className="mr-1 mb-1"
              alt="logo"
            />
            image<span className="text-dark">nary</span>.
          </span>
        </div>
        <div className="col-md-7 px-0 py-2 mt-1">
          <div className="nav-menus">
          <Link className="text-decoration-none text-dark mr-3" to="/">
              <i className="fa fa-home"></i><span className="text-custom-3 ml-2">Home</span>
            </Link>
            <Link className="text-decoration-none text-dark mr-3" to="/search">
              <i className="fa fa-search"></i><span className="text-custom-3 ml-2">Search</span>
            </Link>
            <Link className="text-decoration-none text-dark" to="/topics">
              <i className="fa fa-th"></i><span className="text-custom-3 ml-2">Topics</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
