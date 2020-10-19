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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/search">
              Search
            </Link>
            <Link className="nav-item nav-link" to="/topics">
              Topics
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
