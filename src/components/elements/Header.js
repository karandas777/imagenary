import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-p">
        <span className="navbar-brand sty-font text-danger">
          <img
            src={require("../../assets/logo.png")}
            height="30"
            width="30"
            className="mr-1 mb-1" alt="logo"
          />
          image<span className="text-dark">nary</span>.
        </span>
          <div className="ml-auto">
            <Link className="text-decoration-none text-dark mr-3" to="/">
              <i className="fa fa-home"></i><span className="hide-on text-muted ml-2">Home</span>
            </Link>
            <Link className="text-decoration-none text-dark mr-3" to="/search">
              <i className="fa fa-search"></i><span className="hide-on text-muted ml-2">Search</span>
            </Link>
            <Link className="text-decoration-none text-dark" to="/topics">
              <i className="fa fa-th"></i><span className="hide-on text-muted ml-2">Topics</span>
            </Link>
          </div>
      </nav>
    );
  }
}
