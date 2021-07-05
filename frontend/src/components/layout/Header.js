import React, { Fragment, Component } from "react";
import { render } from "react-dom";

// We are going to create a class-based component as we will use then redux
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light"> 
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Lead Manager
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// The navbar-expand-sm is only to be shown in small screens
