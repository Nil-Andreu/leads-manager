import React, { Fragment, Component } from "react";
import { render } from "react-dom";

// We are going to create a class-based component as we will use then redux
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light"> 
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Lead Manager
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// The navbar-expand-sm is only to be shown in small screens
